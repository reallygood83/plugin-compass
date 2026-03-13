import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { recommend } from './recommender';
import { enhanceTextWithLlm } from './llm';
import type { Language, PluginCompassSettings, UserProfile } from './types';

const DEFAULT_SETTINGS: PluginCompassSettings = {
  language: 'ko',
  provider: 'none',
  geminiApiKey: '',
  geminiModel: 'gemini-2.5-flash',
  cerebrasApiKey: '',
  cerebrasModel: 'llama-3.3-70b',
  useLlmEnhancement: false
};

export default class PluginCompassPlugin extends Plugin {
  settings: PluginCompassSettings = DEFAULT_SETTINGS;

  async onload() {
    await this.loadSettings();

    this.addCommand({
      id: 'open-plugin-compass-modal',
      name: 'Open Plugin Compass',
      callback: () => new CompassModal(this.app, this).open()
    });

    this.addRibbonIcon('compass', 'Plugin Compass', () => {
      new CompassModal(this.app, this).open();
    });

    this.addSettingTab(new PluginCompassSettingTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class CompassModal extends Modal {
  plugin: PluginCompassPlugin;
  profile: UserProfile = { purpose: 'research', beginner: true };

  constructor(app: App, plugin: PluginCompassPlugin) {
    super(app);
    this.plugin = plugin;
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl('h2', { text: 'Plugin Compass' });

    const grid = contentEl.createDiv({ cls: 'plugin-compass-grid' });
    const left = grid.createDiv({ cls: 'plugin-compass-section' });
    const right = grid.createDiv({ cls: 'plugin-compass-section' });

    left.createEl('h3', { text: this.t('Settings') });

    new Setting(left)
      .setName(this.t('Language'))
      .addDropdown((d) =>
        d
          .addOption('ko', '한국어')
          .addOption('en', 'English')
          .setValue(this.plugin.settings.language)
          .onChange(async (v) => {
            this.plugin.settings.language = v as Language;
            await this.plugin.saveSettings();
            this.onOpen();
          })
      );

    new Setting(left)
      .setName(this.t('LLM Provider'))
      .addDropdown((d) =>
        d
          .addOption('none', 'None')
          .addOption('gemini', 'Gemini')
          .addOption('cerebras', 'Cerebras')
          .setValue(this.plugin.settings.provider)
          .onChange(async (v: any) => {
            this.plugin.settings.provider = v;
            await this.plugin.saveSettings();
            this.onOpen();
          })
      );

    new Setting(left)
      .setName(this.t('Use LLM enhancement'))
      .addToggle((t) =>
        t.setValue(this.plugin.settings.useLlmEnhancement).onChange(async (v) => {
          this.plugin.settings.useLlmEnhancement = v;
          await this.plugin.saveSettings();
        })
      );

    if (this.plugin.settings.provider === 'gemini') {
      new Setting(left)
        .setName('Gemini API Key')
        .addText((t) =>
          t.setPlaceholder('AIza...').setValue(this.plugin.settings.geminiApiKey).onChange(async (v) => {
            this.plugin.settings.geminiApiKey = v.trim();
            await this.plugin.saveSettings();
          })
        );
      new Setting(left)
        .setName('Gemini Model')
        .setDesc('Default: gemini-2.5-flash')
        .addText((t) =>
          t.setValue(this.plugin.settings.geminiModel).onChange(async (v) => {
            this.plugin.settings.geminiModel = v.trim();
            await this.plugin.saveSettings();
          })
        );
    }

    if (this.plugin.settings.provider === 'cerebras') {
      new Setting(left)
        .setName('Cerebras API Key')
        .addText((t) =>
          t.setPlaceholder('csk-...').setValue(this.plugin.settings.cerebrasApiKey).onChange(async (v) => {
            this.plugin.settings.cerebrasApiKey = v.trim();
            await this.plugin.saveSettings();
          })
        );
      new Setting(left)
        .setName('Cerebras Model')
        .setDesc('Default: llama-3.3-70b')
        .addText((t) =>
          t.setValue(this.plugin.settings.cerebrasModel).onChange(async (v) => {
            this.plugin.settings.cerebrasModel = v.trim();
            await this.plugin.saveSettings();
          })
        );
    }

    left.createEl('h3', { text: this.t('Profile') });

    new Setting(left)
      .setName(this.t('Primary purpose'))
      .addDropdown((d) =>
        d
          .addOption('research', this.t('Research'))
          .addOption('writing', this.t('Writing'))
          .addOption('productivity', this.t('Productivity'))
          .setValue(this.profile.purpose)
          .onChange((v: any) => (this.profile.purpose = v))
      );

    new Setting(left)
      .setName(this.t('Beginner mode'))
      .addToggle((t) => t.setValue(this.profile.beginner).onChange((v) => (this.profile.beginner = v)));

    right.createEl('h3', { text: this.t('Recommendations') });
    const resultEl = right.createDiv();

    new Setting(right).addButton((b) =>
      b
        .setButtonText(this.t('Run recommendation'))
        .setCta()
        .onClick(async () => {
          resultEl.empty();
          const items = recommend(this.profile);
          let textBlock = '';

          for (const item of items) {
            const card = resultEl.createDiv({ cls: 'plugin-compass-card' });
            card.createEl('h4', { text: item.name[this.plugin.settings.language] });
            card.createEl('p', { text: item.summary[this.plugin.settings.language] });
            card.createEl('p', { text: `${this.t('Pros')}: ${item.pros[this.plugin.settings.language].join(', ')}` });
            card.createEl('p', { text: `${this.t('Cons')}: ${item.cons[this.plugin.settings.language].join(', ')}` });
            textBlock += `${item.name[this.plugin.settings.language]}: ${item.summary[this.plugin.settings.language]}\n`;
          }

          if (this.plugin.settings.useLlmEnhancement && this.plugin.settings.provider !== 'none') {
            try {
              const enhanced = await enhanceTextWithLlm(this.plugin.settings, textBlock);
              resultEl.createEl('hr');
              resultEl.createEl('p', { text: this.t('LLM summary') });
              resultEl.createEl('pre', { text: enhanced });
            } catch (e: any) {
              new Notice(e.message ?? 'LLM call failed');
            }
          }
        })
    );
  }

  t(input: string): string {
    const lang = this.plugin.settings.language;
    const ko: Record<string, string> = {
      Settings: '설정',
      Language: '언어',
      'LLM Provider': 'LLM 제공자',
      'Use LLM enhancement': 'LLM 요약 강화 사용',
      Profile: '프로필',
      'Primary purpose': '주 사용 목적',
      Research: '리서치',
      Writing: '글쓰기',
      Productivity: '생산성',
      'Beginner mode': '초보 모드',
      Recommendations: '추천 결과',
      'Run recommendation': '추천 실행',
      Pros: '장점',
      Cons: '단점',
      'LLM summary': 'LLM 요약'
    };
    if (lang === 'ko') return ko[input] ?? input;
    return input;
  }
}

class PluginCompassSettingTab extends PluginSettingTab {
  plugin: PluginCompassPlugin;

  constructor(app: App, plugin: PluginCompassPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl('h2', { text: 'Plugin Compass' });

    new Setting(containerEl)
      .setName('Open modal')
      .setDesc('Use the modal for most operations and settings.')
      .addButton((b) =>
        b.setButtonText('Open').onClick(() => {
          new CompassModal(this.app, this.plugin).open();
        })
      );
  }
}
