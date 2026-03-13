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

    const urls = this.settings.metadataSourceUrls.split('\n').map((x) => x.trim()).filter(Boolean);
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

    const iso = new Date().toISOString().slice(0, 10);
    const md = `# Plugin Compass Weekly Update (${iso})\n\n## Dataset\n- Total plugins: ${PLUGINS.length}\n- Categories: ${getCategories().join(', ')}\n\n## Source check\n${summary.join('\n') || '- (no URLs configured)'}\n`;

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

  private field(parent: HTMLElement, label: string): HTMLElement {
    const row = parent.createDiv({ cls: 'plugin-compass-field' });
    row.createEl('label', { text: label });
    return row;
  }

  private renderSetup(el: HTMLElement) {
    const intro = el.createDiv({ cls: 'plugin-compass-card' });
    intro.createEl('h3', { text: this.t('What Plugin Compass does') });
    intro.createEl('p', { text: this.t('It helps you discover Obsidian plugins with clear pros/cons, then generates a setup plan in Korean or English.') });

    const lang = this.field(el, this.t('Language')).createEl('select');
    lang.createEl('option', { text: '한국어', value: 'ko' });
    lang.createEl('option', { text: 'English', value: 'en' });
    lang.value = this.plugin.settings.language;
    lang.onchange = async () => {
      this.plugin.settings.language = lang.value as Language;
      await this.plugin.saveSettings();
      this.render();
    };

    const provider = this.field(el, this.t('LLM Provider')).createEl('select');
    ['none', 'gemini', 'cerebras'].forEach((p) => provider.createEl('option', { text: p, value: p }));
    provider.value = this.plugin.settings.provider;
    provider.onchange = async () => {
      this.plugin.settings.provider = provider.value as any;
      await this.plugin.saveSettings();
      this.render();
    };

    const llmRow = this.field(el, this.t('Use LLM enhancement'));
    const llmToggle = llmRow.createEl('input', { type: 'checkbox' });
    llmToggle.checked = this.plugin.settings.useLlmEnhancement;
    llmToggle.onchange = async () => {
      this.plugin.settings.useLlmEnhancement = llmToggle.checked;
      await this.plugin.saveSettings();
    };

    const timeoutInput = this.field(el, this.t('Request timeout (ms)')).createEl('input', { type: 'number' });
    timeoutInput.value = String(this.plugin.settings.requestTimeoutMs);
    timeoutInput.onchange = async () => {
      const v = Number(timeoutInput.value);
      if (!Number.isNaN(v) && v >= 3000) {
        this.plugin.settings.requestTimeoutMs = v;
        await this.plugin.saveSettings();
      }
    };

    if (this.plugin.settings.provider === 'gemini') {
      const key = this.field(el, 'Gemini API Key').createEl('input', { type: this.plugin.settings.maskSensitiveFields ? 'password' : 'text' });
      key.value = this.plugin.settings.geminiApiKey;
      key.onchange = async () => {
        this.plugin.settings.geminiApiKey = key.value.trim();
        await this.plugin.saveSettings();
      };

      const model = this.field(el, 'Gemini Model').createEl('input', { type: 'text' });
      model.value = this.plugin.settings.geminiModel;
      model.onchange = async () => {
        this.plugin.settings.geminiModel = model.value.trim();
        await this.plugin.saveSettings();
      };
    }

    if (this.plugin.settings.provider === 'cerebras') {
      const key = this.field(el, 'Cerebras API Key').createEl('input', { type: this.plugin.settings.maskSensitiveFields ? 'password' : 'text' });
      key.value = this.plugin.settings.cerebrasApiKey;
      key.onchange = async () => {
        this.plugin.settings.cerebrasApiKey = key.value.trim();
        await this.plugin.saveSettings();
      };

      const model = this.field(el, 'Cerebras Model').createEl('input', { type: 'text' });
      model.value = this.plugin.settings.cerebrasModel;
      model.onchange = async () => {
        this.plugin.settings.cerebrasModel = model.value.trim();
        await this.plugin.saveSettings();
      };
    }

    const maskRow = this.field(el, this.t('Mask API key fields'));
    const mask = maskRow.createEl('input', { type: 'checkbox' });
    mask.checked = this.plugin.settings.maskSensitiveFields;
    mask.onchange = async () => {
      this.plugin.settings.maskSensitiveFields = mask.checked;
      await this.plugin.saveSettings();
      this.render();
    };

    el.createEl('p', { cls: 'plugin-compass-warning', text: this.t('Never share vault files containing plaintext keys.') });
  }

  private renderDiscover(el: HTMLElement) {
    el.createEl('p', { text: this.t('Tip: click a plugin row to see details and install actions below.') });

    const search = this.field(el, this.t('Search')).createEl('input', { type: 'text' });
    search.placeholder = 'dataview, task...';
    search.value = this.filters.search;
    search.oninput = () => {
      this.filters.search = search.value.toLowerCase();
      this.render();
    };

    const cat = this.field(el, this.t('Category')).createEl('select');
    cat.createEl('option', { text: 'All', value: 'all' });
    getCategories().forEach((c) => cat.createEl('option', { text: c, value: c }));
    cat.value = this.filters.category;
    cat.onchange = () => {
      this.filters.category = cat.value as any;
      this.render();
    };

    const list = this.filteredPlugins();
    el.createEl('p', { text: `${list.length} plugins` });

    const table = el.createEl('table', { cls: 'plugin-compass-table' });
    const head = table.createEl('thead').createEl('tr');
    ['Name', 'Category', 'Difficulty', 'Mobile', 'Score'].forEach((x) => head.createEl('th', { text: x }));
    const body = table.createEl('tbody');

    list.slice(0, 80).forEach((p) => {
      const row = body.createEl('tr');
      row.onclick = () => {
        this.selectedPlugin = p;
        this.render();
      };
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

    const installUri = `obsidian://show-plugin?id=${p.id}`;
    const btns = card.createDiv({ cls: 'plugin-compass-btnrow' });

    const openBtn = btns.createEl('button', { text: this.t('Open installer') });
    openBtn.onclick = () => window.open(installUri, '_blank');

    const copyBtn = btns.createEl('button', { text: this.t('Copy command') });
    copyBtn.onclick = async () => {
      await navigator.clipboard.writeText(installUri);
      new Notice(this.t('Copied'));
    };
  }

  private renderRecommend(el: HTMLElement) {
    const purpose = this.field(el, this.t('Purpose')).createEl('select');
    purpose.createEl('option', { value: 'research', text: this.t('Research') });
    purpose.createEl('option', { value: 'writing', text: this.t('Writing') });
    purpose.createEl('option', { value: 'productivity', text: this.t('Productivity') });
    purpose.value = this.profile.purpose;
    purpose.onchange = () => (this.profile.purpose = purpose.value as any);

    const beginner = this.field(el, this.t('Beginner mode')).createEl('input', { type: 'checkbox' });
    beginner.checked = this.profile.beginner;
    beginner.onchange = () => (this.profile.beginner = beginner.checked);

    const out = el.createDiv();
    const runBtn = el.createEl('button', { text: this.t('Run recommendation') });
    runBtn.onclick = async () => {
      out.empty();
      const rec = recommend(this.profile);
      let plan = '# Plugin Compass Setup Plan\n\n';
      for (const item of rec.slice(0, 10)) {
        const d = out.createDiv({ cls: 'plugin-compass-card' });
        d.createEl('h4', { text: item.name[this.plugin.settings.language] });
        d.createEl('p', { text: item.summary[this.plugin.settings.language] });
        plan += `## ${item.name.en}\n- ID: ${item.id}\n- Link: ${item.pluginUrl}\n\n`;
      }

      if (this.plugin.settings.useLlmEnhancement && this.plugin.settings.provider !== 'none') {
        try {
          const improved = await enhanceTextWithLlm(this.plugin.settings, plan);
          out.createEl('pre', { text: improved });
          plan = improved;
        } catch (e: any) {
          new Notice(e?.message ?? 'LLM request failed');
        }
      }

      const exportBtn = out.createEl('button', { text: this.t('Export setup plan markdown') });
      exportBtn.onclick = async () => {
        const dir = this.plugin.settings.weeklyReportFolder.trim() || 'Plugin Compass';
        await this.app.vault.createFolder(dir).catch(() => undefined);
        const path = `${dir}/plugin-compass-setup-plan-${new Date().toISOString().slice(0, 10)}.md`;
        await this.app.vault.adapter.write(path, plan);
        new Notice(`${this.t('Saved')}: ${path}`);
      };
    };
  }

  private renderWeekly(el: HTMLElement) {
    const sources = this.field(el, this.t('Metadata source URLs')).createEl('textarea');
    sources.value = this.plugin.settings.metadataSourceUrls;
    sources.rows = 5;
    sources.onchange = async () => {
      this.plugin.settings.metadataSourceUrls = sources.value;
      await this.plugin.saveSettings();
    };

    const folder = this.field(el, this.t('Weekly report folder')).createEl('input', { type: 'text' });
    folder.value = this.plugin.settings.weeklyReportFolder;
    folder.onchange = async () => {
      this.plugin.settings.weeklyReportFolder = folder.value.trim() || 'Plugin Compass';
      await this.plugin.saveSettings();
    };

    const run = el.createEl('button', { text: this.t('Run update now') });
    run.onclick = async () => {
      try {
        const file = await this.plugin.runWeeklyUpdate();
        new Notice(`${this.t('Saved')}: ${file}`);
      } catch (error: any) {
        new Notice(error?.message ?? 'Failed to run weekly update');
      }
    };
  }

  private filteredPlugins(): PluginRecord[] {
    const list = PLUGINS.filter((p) => {
      if (this.filters.search) {
        const hay = `${p.id} ${p.name.en} ${p.name.ko} ${p.summary.en} ${p.summary.ko}`.toLowerCase();
        if (!hay.includes(this.filters.search)) return false;
      }
      if (this.filters.category !== 'all' && p.category !== this.filters.category) return false;
      return true;
    });

    list.sort((a, b) => b.recommendationScore - a.recommendationScore);
    return list;
  }

  t(input: string): string {
    if (this.plugin.settings.language === 'en') return input;
    const ko: Record<string, string> = {
      Setup: '설정',
      Discover: '탐색',
      Recommend: '추천',
      'Weekly Update': '주간 업데이트',
      'What Plugin Compass does': 'Plugin Compass가 하는 일',
      'It helps you discover Obsidian plugins with clear pros/cons, then generates a setup plan in Korean or English.': 'Obsidian 플러그인을 장단점 중심으로 쉽게 탐색하고, 한국어/영어 설치 플랜을 생성합니다.',
      Language: '언어',
      'LLM Provider': 'LLM 제공자',
      'Use LLM enhancement': 'LLM 개선 사용',
      'Request timeout (ms)': '요청 타임아웃(ms)',
      'Mask API key fields': 'API 키 마스킹',
      Search: '검색',
      Category: '카테고리',
      Pros: '장점',
      Cons: '단점',
      'Open installer': '설치창 열기',
      'Copy command': '명령 복사',
      Copied: '복사 완료',
      Purpose: '목적',
      Research: '리서치',
      Writing: '글쓰기',
      Productivity: '생산성',
      'Beginner mode': '초보 모드',
      'Run recommendation': '추천 실행',
      'Export setup plan markdown': '설치 플랜 마크다운 내보내기',
      Saved: '저장됨',
      'Metadata source URLs': '메타데이터 소스 URL',
      'Weekly report folder': '주간 리포트 폴더',
      'Run update now': '지금 업데이트 실행',
      'Never share vault files containing plaintext keys.': 'API 키가 포함된 평문 설정 파일을 공유하지 마세요.',
      'Tip: click a plugin row to see details and install actions below.': '팁: 플러그인 행을 클릭하면 아래에 상세정보와 설치 동작이 나타납니다.'
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
      .setDesc('Use modal tabs for all operations.')
      .addButton((b) => b.setButtonText('Open').onClick(() => new CompassModal(this.app, this.plugin).open()));
  }
}
