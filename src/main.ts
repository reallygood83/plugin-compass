import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { getCategories, PLUGINS } from './data';
import { enhanceTextWithLlm } from './llm';
import { recommend } from './recommender';
import type { CompassTab, DiscoverFilters, Language, PluginCompassSettings, PluginRecord, UserProfile } from './types';

const DEFAULT_SETTINGS: PluginCompassSettings = {
  language: 'ko',
  provider: 'none',
  geminiApiKey: '',
  geminiModel: 'gemini-2.5-flash',
  cerebrasApiKey: '',
  cerebrasModel: 'llama-3.3-70b',
  useLlmEnhancement: false,
  metadataSourceUrls: 'https://obsidian.md/plugins',
  requestTimeoutMs: 15000,
  maskSensitiveFields: true,
  weeklyReportFolder: 'Plugin Compass'
};

export default class PluginCompassPlugin extends Plugin {
  settings: PluginCompassSettings = DEFAULT_SETTINGS;

  async onload() {
    await this.loadSettings();

    this.addCommand({ id: 'open-plugin-compass-modal', name: 'Open Plugin Compass', callback: () => new CompassModal(this.app, this).open() });
    this.addCommand({ id: 'run-weekly-metadata-update', name: 'Run weekly metadata update scaffold', callback: async () => this.runWeeklyUpdate() });

    this.addRibbonIcon('compass', 'Plugin Compass', () => new CompassModal(this.app, this).open());
    this.addSettingTab(new PluginCompassSettingTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async runWeeklyUpdate(): Promise<string> {
    const reportFolder = this.settings.weeklyReportFolder.trim() || 'Plugin Compass';
    await this.app.vault.createFolder(reportFolder).catch(() => undefined);

    const urls = this.settings.metadataSourceUrls
      .split('\n')
      .map((x) => x.trim())
      .filter(Boolean);

    const summary: string[] = [];
    for (const url of urls) {
      try {
        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), this.settings.requestTimeoutMs);
        const res = await fetch(url, { signal: controller.signal });
        window.clearTimeout(timer);
        summary.push(`- ✅ ${url} (${res.status})`);
      } catch (error: any) {
        summary.push(`- ⚠️ ${url} (fallback: ${error?.message ?? 'network error'})`);
      }
    }

    const now = new Date();
    const iso = now.toISOString().slice(0, 10);
    const md = `# Plugin Compass Weekly Update (${iso})\n\n## Dataset\n- Total plugins: ${PLUGINS.length}\n- Categories: ${getCategories().join(', ')}\n\n## Source check\n${summary.join('\n') || '- (no URLs configured)'}\n\n## Notes\n- This is scaffolding mode: keeps recommendations available even when network fetch fails.\n- Safe fallback used by default.\n`;

    const filePath = `${reportFolder}/plugin-compass-weekly-${iso}.md`;
    await this.app.vault.adapter.write(filePath, md);
    return filePath;
  }
}

class CompassModal extends Modal {
  plugin: PluginCompassPlugin;
  activeTab: CompassTab = 'setup';
  selectedPlugin: PluginRecord | null = null;
  profile: UserProfile = { purpose: 'research', beginner: true, preferMobile: true, preferredDifficulty: 'any', preferredCategory: 'all' };
  filters: DiscoverFilters = { search: '', category: 'all', difficulty: 'any', mobile: 'all', sortBy: 'score', sortOrder: 'desc' };

  constructor(app: App, plugin: PluginCompassPlugin) {
    super(app);
    this.plugin = plugin;
  }

  onOpen(): void {
    this.render();
  }

  private render() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass('plugin-compass-root');
    contentEl.createEl('h2', { text: 'Plugin Compass' });

    const tabs = contentEl.createDiv({ cls: 'plugin-compass-tabs' });
    this.tabButton(tabs, 'setup', this.t('Setup'));
    this.tabButton(tabs, 'discover', this.t('Discover'));
    this.tabButton(tabs, 'recommend', this.t('Recommend'));
    this.tabButton(tabs, 'weekly', this.t('Weekly Update'));

    const body = contentEl.createDiv({ cls: 'plugin-compass-body' });
    if (this.activeTab === 'setup') this.renderSetup(body);
    if (this.activeTab === 'discover') this.renderDiscover(body);
    if (this.activeTab === 'recommend') this.renderRecommend(body);
    if (this.activeTab === 'weekly') this.renderWeekly(body);
  }

  private tabButton(parent: HTMLElement, tab: CompassTab, label: string) {
    const btn = parent.createEl('button', { text: label, cls: tab === this.activeTab ? 'is-active' : '' });
    btn.onclick = () => {
      this.activeTab = tab;
      this.render();
    };
  }

  private renderSetup(el: HTMLElement) {
    new Setting(el)
      .setName(this.t('Language'))
      .addDropdown((d) =>
        d
          .addOption('ko', '한국어')
          .addOption('en', 'English')
          .setValue(this.plugin.settings.language)
          .onChange(async (v) => {
            this.plugin.settings.language = v as Language;
            await this.plugin.saveSettings();
            this.render();
          })
      );

    new Setting(el)
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
            this.render();
          })
      );

    new Setting(el)
      .setName(this.t('Use LLM enhancement'))
      .addToggle((t) => t.setValue(this.plugin.settings.useLlmEnhancement).onChange(async (v) => {
        this.plugin.settings.useLlmEnhancement = v;
        await this.plugin.saveSettings();
      }));

    new Setting(el)
      .setName(this.t('Request timeout (ms)'))
      .addText((t) => t.setValue(String(this.plugin.settings.requestTimeoutMs)).onChange(async (v) => {
        const parsed = Number(v);
        if (!Number.isNaN(parsed) && parsed >= 3000) {
          this.plugin.settings.requestTimeoutMs = parsed;
          await this.plugin.saveSettings();
        }
      }));

    if (this.plugin.settings.provider === 'gemini') {
      this.secureTextSetting(el, 'Gemini API Key', this.plugin.settings.geminiApiKey, async (v) => {
        this.plugin.settings.geminiApiKey = v;
      });
      new Setting(el).setName('Gemini Model').addText((t) => t.setValue(this.plugin.settings.geminiModel).onChange(async (v) => { this.plugin.settings.geminiModel = v.trim(); await this.plugin.saveSettings(); }));
    }

    if (this.plugin.settings.provider === 'cerebras') {
      this.secureTextSetting(el, 'Cerebras API Key', this.plugin.settings.cerebrasApiKey, async (v) => {
        this.plugin.settings.cerebrasApiKey = v;
      });
      new Setting(el).setName('Cerebras Model').addText((t) => t.setValue(this.plugin.settings.cerebrasModel).onChange(async (v) => { this.plugin.settings.cerebrasModel = v.trim(); await this.plugin.saveSettings(); }));
    }

    el.createEl('p', { cls: 'plugin-compass-warning', text: this.t('Never share vault files containing plaintext keys.') });
  }

  private secureTextSetting(el: HTMLElement, name: string, value: string, assign: (v: string) => Promise<void> | void) {
    new Setting(el)
      .setName(name)
      .setDesc(this.t('Stored in local plugin settings.'))
      .addText((t) => {
        t.setValue(value);
        t.inputEl.type = this.plugin.settings.maskSensitiveFields ? 'password' : 'text';
        t.onChange(async (v) => {
          await assign(v.trim());
          await this.plugin.saveSettings();
        });
      })
      .addExtraButton((b) =>
        b.setIcon(this.plugin.settings.maskSensitiveFields ? 'eye-off' : 'eye').setTooltip(this.t('Toggle mask')).onClick(async () => {
          this.plugin.settings.maskSensitiveFields = !this.plugin.settings.maskSensitiveFields;
          await this.plugin.saveSettings();
          this.render();
        })
      );
  }

  private renderDiscover(el: HTMLElement) {
    const controls = el.createDiv({ cls: 'plugin-compass-controls' });
    const categories = getCategories();

    new Setting(controls).setName(this.t('Search')).addText((t) => t.setPlaceholder('dataview, task...').onChange((v) => { this.filters.search = v.toLowerCase(); this.render(); }));
    new Setting(controls).setName(this.t('Category')).addDropdown((d) => { d.addOption('all', 'All'); categories.forEach((c) => d.addOption(c, c)); d.setValue(this.filters.category).onChange((v: any) => { this.filters.category = v; this.render(); }); });
    new Setting(controls).setName(this.t('Difficulty')).addDropdown((d) => d.addOption('any', 'Any').addOption('beginner', 'Beginner').addOption('intermediate', 'Intermediate').addOption('advanced', 'Advanced').setValue(this.filters.difficulty).onChange((v: any) => { this.filters.difficulty = v; this.render(); }));
    new Setting(controls).setName(this.t('Mobile support')).addDropdown((d) => d.addOption('all', 'All').addOption('yes', 'Yes').addOption('no', 'No').setValue(this.filters.mobile).onChange((v: any) => { this.filters.mobile = v; this.render(); }));
    new Setting(controls).setName(this.t('Sort')).addDropdown((d) => d.addOption('score', 'Score').addOption('name', 'Name').addOption('difficulty', 'Difficulty').setValue(this.filters.sortBy).onChange((v: any) => { this.filters.sortBy = v; this.render(); })).addDropdown((d) => d.addOption('desc', 'Desc').addOption('asc', 'Asc').setValue(this.filters.sortOrder).onChange((v: any) => { this.filters.sortOrder = v; this.render(); }));

    const list = this.filteredPlugins();
    el.createEl('p', { text: `${list.length} plugins` });

    const table = el.createEl('table', { cls: 'plugin-compass-table' });
    const head = table.createEl('thead').createEl('tr');
    ['Name', 'Category', 'Difficulty', 'Mobile', 'Score'].forEach((x) => head.createEl('th', { text: x }));

    const body = table.createEl('tbody');
    list.slice(0, 60).forEach((p) => {
      const row = body.createEl('tr');
      row.onclick = () => { this.selectedPlugin = p; this.render(); };
      row.createEl('td', { text: p.name[this.plugin.settings.language] });
      row.createEl('td', { text: p.category });
      row.createEl('td', { text: p.difficulty });
      row.createEl('td', { text: p.mobileSupport ? 'Yes' : 'No' });
      row.createEl('td', { text: String(p.recommendationScore) });
    });

    if (this.selectedPlugin) this.renderPluginCard(el, this.selectedPlugin);
  }

  private renderPluginCard(el: HTMLElement, p: PluginRecord) {
    const card = el.createDiv({ cls: 'plugin-compass-card' });
    card.createEl('h3', { text: p.name[this.plugin.settings.language] });
    card.createEl('p', { text: p.summary[this.plugin.settings.language] });
    card.createEl('p', { text: `${this.t('Pros')}: ${p.pros[this.plugin.settings.language].join(', ')}` });
    card.createEl('p', { text: `${this.t('Cons')}: ${p.cons[this.plugin.settings.language].join(', ')}` });
    card.createEl('p', { text: `Tags: ${p.tags.join(', ')}` });
    card.createEl('p', { cls: 'plugin-compass-warning', text: this.t('Obsidian security policy may require manual enable after opening installer.') });

    new Setting(card)
      .setName(this.t('Plugin URL'))
      .setDesc(p.pluginUrl)
      .addButton((b) => b.setButtonText(this.t('Copy ID link')).onClick(async () => {
        await navigator.clipboard.writeText(p.pluginUrl);
        new Notice(this.t('Copied'));
      }));

    const installUri = `obsidian://show-plugin?id=${p.id}`;

    new Setting(card)
      .setName(this.t('Install command'))
      .setDesc(installUri)
      .addButton((b) => b.setButtonText(this.t('Open installer')).setCta().onClick(() => {
        window.open(installUri, '_blank');
      }))
      .addButton((b) => b.setButtonText(this.t('Copy command')).onClick(async () => {
        await navigator.clipboard.writeText(installUri);
        new Notice(this.t('Copied'));
      }));
  }

  private renderRecommend(el: HTMLElement) {
    const categories = getCategories();
    new Setting(el).setName(this.t('Purpose')).addDropdown((d) => d.addOption('research', this.t('Research')).addOption('writing', this.t('Writing')).addOption('productivity', this.t('Productivity')).setValue(this.profile.purpose).onChange((v: any) => (this.profile.purpose = v)));
    new Setting(el).setName(this.t('Beginner mode')).addToggle((t) => t.setValue(this.profile.beginner).onChange((v) => (this.profile.beginner = v)));
    new Setting(el).setName(this.t('Prefer mobile')).addToggle((t) => t.setValue(this.profile.preferMobile).onChange((v) => (this.profile.preferMobile = v)));
    new Setting(el).setName(this.t('Preferred category')).addDropdown((d) => { d.addOption('all', 'All'); categories.forEach((c) => d.addOption(c, c)); d.setValue(this.profile.preferredCategory).onChange((v: any) => (this.profile.preferredCategory = v)); });
    new Setting(el).setName(this.t('Preferred difficulty')).addDropdown((d) => d.addOption('any', 'Any').addOption('beginner', 'Beginner').addOption('intermediate', 'Intermediate').addOption('advanced', 'Advanced').setValue(this.profile.preferredDifficulty).onChange((v: any) => (this.profile.preferredDifficulty = v)));

    const out = el.createDiv();
    new Setting(el).addButton((b) => b.setButtonText(this.t('Run recommendation')).setCta().onClick(async () => {
      out.empty();
      const rec = recommend(this.profile);
      let plan = `# Plugin Compass Setup Plan\n\n`;

      for (const item of rec.slice(0, 10)) {
        const div = out.createDiv({ cls: 'plugin-compass-card' });
        div.createEl('h4', { text: item.name[this.plugin.settings.language] });
        div.createEl('p', { text: item.summary[this.plugin.settings.language] });
        plan += `## ${item.name.en}\n- ID: ${item.id}\n- Link: ${item.pluginUrl}\n- Why: ${item.summary.en}\n\n`;
      }

      if (this.plugin.settings.useLlmEnhancement && this.plugin.settings.provider !== 'none') {
        try {
          const improved = await enhanceTextWithLlm(this.plugin.settings, plan);
          out.createEl('pre', { text: improved });
          plan = improved;
        } catch (error: any) {
          new Notice(error?.message ?? 'LLM request failed');
        }
      }

      new Setting(out).addButton((b) => b.setButtonText(this.t('Export setup plan markdown')).onClick(async () => {
        const dir = this.plugin.settings.weeklyReportFolder.trim() || 'Plugin Compass';
        await this.app.vault.createFolder(dir).catch(() => undefined);
        const path = `${dir}/plugin-compass-setup-plan-${new Date().toISOString().slice(0, 10)}.md`;
        await this.app.vault.adapter.write(path, plan);
        new Notice(`${this.t('Saved')}: ${path}`);
      }));
    }));
  }

  private renderWeekly(el: HTMLElement) {
    new Setting(el)
      .setName(this.t('Metadata source URLs'))
      .setDesc('One URL per line')
      .addTextArea((t) => t.setValue(this.plugin.settings.metadataSourceUrls).onChange(async (v) => { this.plugin.settings.metadataSourceUrls = v; await this.plugin.saveSettings(); }));

    new Setting(el)
      .setName(this.t('Weekly report folder'))
      .addText((t) => t.setValue(this.plugin.settings.weeklyReportFolder).onChange(async (v) => {
        this.plugin.settings.weeklyReportFolder = v.trim() || 'Plugin Compass';
        await this.plugin.saveSettings();
      }));

    new Setting(el).addButton((b) => b.setButtonText(this.t('Run update now')).setCta().onClick(async () => {
      try {
        const file = await this.plugin.runWeeklyUpdate();
        new Notice(`${this.t('Saved')}: ${file}`);
      } catch (error: any) {
        new Notice(error?.message ?? 'Failed to run weekly update');
      }
    }));
  }

  private filteredPlugins(): PluginRecord[] {
    const list = PLUGINS.filter((p) => {
      if (this.filters.search) {
        const hay = `${p.id} ${p.name.en} ${p.name.ko} ${p.summary.en} ${p.summary.ko}`.toLowerCase();
        if (!hay.includes(this.filters.search)) return false;
      }
      if (this.filters.category !== 'all' && p.category !== this.filters.category) return false;
      if (this.filters.difficulty !== 'any' && p.difficulty !== this.filters.difficulty) return false;
      if (this.filters.mobile === 'yes' && !p.mobileSupport) return false;
      if (this.filters.mobile === 'no' && p.mobileSupport) return false;
      return true;
    });

    list.sort((a, b) => {
      let compare = 0;
      if (this.filters.sortBy === 'score') compare = a.recommendationScore - b.recommendationScore;
      if (this.filters.sortBy === 'name') compare = a.name.en.localeCompare(b.name.en);
      if (this.filters.sortBy === 'difficulty') compare = a.difficulty.localeCompare(b.difficulty);
      return this.filters.sortOrder === 'asc' ? compare : -compare;
    });

    return list;
  }

  t(input: string): string {
    if (this.plugin.settings.language === 'en') return input;
    const ko: Record<string, string> = {
      Setup: '설정',
      Discover: '탐색',
      Recommend: '추천',
      'Weekly Update': '주간 업데이트',
      Language: '언어',
      'LLM Provider': 'LLM 제공자',
      'Use LLM enhancement': 'LLM 개선 사용',
      'Request timeout (ms)': '요청 타임아웃(ms)',
      'Never share vault files containing plaintext keys.': 'API 키가 포함된 평문 설정 파일을 공유하지 마세요.',
      Search: '검색',
      Category: '카테고리',
      Difficulty: '난이도',
      'Mobile support': '모바일 지원',
      Sort: '정렬',
      Pros: '장점',
      Cons: '단점',
      'Plugin URL': '플러그인 URL',
      'Copy ID link': 'ID 링크 복사',
      'Install command': '설치 명령',
      'Open installer': '설치창 열기',
      'Copy command': '명령 복사',
      Copied: '복사 완료',
      Purpose: '목적',
      Research: '리서치',
      Writing: '글쓰기',
      Productivity: '생산성',
      'Beginner mode': '초보 모드',
      'Prefer mobile': '모바일 선호',
      'Preferred category': '선호 카테고리',
      'Preferred difficulty': '선호 난이도',
      'Run recommendation': '추천 실행',
      'Export setup plan markdown': '설치 플랜 마크다운 내보내기',
      Saved: '저장됨',
      'Metadata source URLs': '메타데이터 소스 URL',
      'Weekly report folder': '주간 리포트 폴더',
      'Run update now': '지금 업데이트 실행',
      'Toggle mask': '마스킹 전환',
      'Stored in local plugin settings.': '로컬 플러그인 설정에 저장됩니다.',
      'Obsidian security policy may require manual enable after opening installer.': 'Obsidian 보안 정책상 설치창을 열어도 수동 활성화가 필요할 수 있습니다.'
    };
    return ko[input] ?? input;
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
      .setDesc('Use the modal tabs for setup, discovery, recommendation, and weekly update.')
      .addButton((b) => b.setButtonText('Open').onClick(() => new CompassModal(this.app, this.plugin).open()));
  }
}
