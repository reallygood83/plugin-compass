"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => PluginCompassPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/data.ts
var PLUGINS = [
  {
    id: "dataview",
    name: { ko: "Dataview", en: "Dataview" },
    summary: { ko: "\uB178\uD2B8 \uBA54\uD0C0\uB370\uC774\uD130 \uCFFC\uB9AC\uB85C \uB3D9\uC801 \uBAA9\uB85D \uC0DD\uC131", en: "Dynamic note metadata queries" },
    pros: { ko: ["\uB300\uADDC\uBAA8 \uB178\uD2B8 \uC815\uB9AC \uAC15\uB825", "\uC790\uB3D9 \uB300\uC2DC\uBCF4\uB4DC \uAD6C\uC131"], en: ["Great for large vaults", "Builds auto dashboards"] },
    cons: { ko: ["\uBB38\uBC95 \uD559\uC2B5 \uD544\uC694"], en: ["Needs query learning"] },
    fit: { research: 5, writing: 3, productivity: 4, beginner: 2 }
  },
  {
    id: "templater",
    name: { ko: "Templater", en: "Templater" },
    summary: { ko: "\uBC18\uBCF5 \uB178\uD2B8 \uC790\uB3D9 \uC0DD\uC131", en: "Template-based note automation" },
    pros: { ko: ["\uBC18\uBCF5 \uC791\uC5C5 \uC2DC\uAC04 \uC808\uAC10", "\uC77C\uAD00\uB41C \uD3EC\uB9F7 \uC720\uC9C0"], en: ["Saves repetitive work", "Keeps structure consistent"] },
    cons: { ko: ["\uACE0\uAE09 \uAE30\uB2A5\uC740 \uBCF5\uC7A1"], en: ["Advanced mode can be complex"] },
    fit: { research: 4, writing: 5, productivity: 4, beginner: 3 }
  },
  {
    id: "tasks",
    name: { ko: "Tasks", en: "Tasks" },
    summary: { ko: "\uCCB4\uD06C\uB9AC\uC2A4\uD2B8\uB97C \uC791\uC5C5\uC2DC\uC2A4\uD15C\uC73C\uB85C \uD655\uC7A5", en: "Turns checklists into a task system" },
    pros: { ko: ["\uC0C1\uD0DC/\uB9C8\uAC10\uC77C \uAD00\uB9AC", "Dataview\uC640 \uAD81\uD569"], en: ["Status & due-date control", "Works well with Dataview"] },
    cons: { ko: ["\uC124\uC815\uC774 \uB9CE\uC544\uC9C0\uBA74 \uBCF5\uC7A1"], en: ["Can become complex with many rules"] },
    fit: { research: 3, writing: 2, productivity: 5, beginner: 4 }
  },
  {
    id: "omnisearch",
    name: { ko: "Omnisearch", en: "Omnisearch" },
    summary: { ko: "\uAC80\uC0C9 \uD488\uC9C8 \uD5A5\uC0C1", en: "Enhanced search quality" },
    pros: { ko: ["\uC7AC\uBC1C\uACAC\uC5D0 \uC88B\uC74C", "\uBE60\uB978 \uD0D0\uC0C9"], en: ["Great rediscovery", "Fast discovery"] },
    cons: { ko: ["\uCD08\uAE30 \uC778\uB371\uC2F1 \uD544\uC694"], en: ["Initial indexing time"] },
    fit: { research: 4, writing: 3, productivity: 4, beginner: 5 }
  },
  {
    id: "quickadd",
    name: { ko: "QuickAdd", en: "QuickAdd" },
    summary: { ko: "\uBE60\uB978 \uCEA1\uCC98/\uCEE4\uB9E8\uB4DC \uC790\uB3D9\uD654", en: "Fast capture and command automation" },
    pros: { ko: ["\uC785\uB825\uC18D\uB3C4 \uD5A5\uC0C1", "\uC790\uB3D9\uD654 \uD655\uC7A5\uC131"], en: ["Faster capture", "Flexible automation"] },
    cons: { ko: ["\uCD08\uAE30 \uC774\uD574 \uD544\uC694"], en: ["Requires initial setup learning"] },
    fit: { research: 4, writing: 4, productivity: 5, beginner: 2 }
  }
];

// src/recommender.ts
function recommend(profile) {
  const scored = PLUGINS.map((p) => {
    const domain = p.fit[profile.purpose];
    const beginnerBonus = profile.beginner ? p.fit.beginner : 3;
    const score = domain * 0.75 + beginnerBonus * 0.25;
    return { p, score };
  }).sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map((x) => x.p);
}

// src/llm.ts
async function enhanceTextWithLlm(settings, input) {
  if (!settings.useLlmEnhancement || settings.provider === "none") return input;
  if (settings.provider === "gemini") {
    return callGemini(settings.geminiApiKey, settings.geminiModel, input);
  }
  if (settings.provider === "cerebras") {
    return callCerebras(settings.cerebrasApiKey, settings.cerebrasModel, input);
  }
  return input;
}
async function callGemini(apiKey, model, input) {
  if (!apiKey) throw new Error("Gemini API key is missing.");
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Improve clarity, keep concise:

${input}` }] }]
      })
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error: ${res.status} ${err}`);
  }
  const json = await res.json();
  return json?.candidates?.[0]?.content?.parts?.[0]?.text ?? input;
}
async function callCerebras(apiKey, model, input) {
  if (!apiKey) throw new Error("Cerebras API key is missing.");
  const res = await fetch("https://api.cerebras.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You rewrite text for clarity and brevity." },
        { role: "user", content: input }
      ],
      temperature: 0.2
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Cerebras API error: ${res.status} ${err}`);
  }
  const json = await res.json();
  return json?.choices?.[0]?.message?.content ?? input;
}

// src/main.ts
var DEFAULT_SETTINGS = {
  language: "ko",
  provider: "none",
  geminiApiKey: "",
  geminiModel: "gemini-2.5-flash",
  cerebrasApiKey: "",
  cerebrasModel: "llama-3.3-70b",
  useLlmEnhancement: false
};
var PluginCompassPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
  }
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "open-plugin-compass-modal",
      name: "Open Plugin Compass",
      callback: () => new CompassModal(this.app, this).open()
    });
    this.addRibbonIcon("compass", "Plugin Compass", () => {
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
};
var CompassModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.profile = { purpose: "research", beginner: true };
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: "Plugin Compass" });
    const grid = contentEl.createDiv({ cls: "plugin-compass-grid" });
    const left = grid.createDiv({ cls: "plugin-compass-section" });
    const right = grid.createDiv({ cls: "plugin-compass-section" });
    left.createEl("h3", { text: this.t("Settings") });
    new import_obsidian.Setting(left).setName(this.t("Language")).addDropdown(
      (d) => d.addOption("ko", "\uD55C\uAD6D\uC5B4").addOption("en", "English").setValue(this.plugin.settings.language).onChange(async (v) => {
        this.plugin.settings.language = v;
        await this.plugin.saveSettings();
        this.onOpen();
      })
    );
    new import_obsidian.Setting(left).setName(this.t("LLM Provider")).addDropdown(
      (d) => d.addOption("none", "None").addOption("gemini", "Gemini").addOption("cerebras", "Cerebras").setValue(this.plugin.settings.provider).onChange(async (v) => {
        this.plugin.settings.provider = v;
        await this.plugin.saveSettings();
        this.onOpen();
      })
    );
    new import_obsidian.Setting(left).setName(this.t("Use LLM enhancement")).addToggle(
      (t) => t.setValue(this.plugin.settings.useLlmEnhancement).onChange(async (v) => {
        this.plugin.settings.useLlmEnhancement = v;
        await this.plugin.saveSettings();
      })
    );
    if (this.plugin.settings.provider === "gemini") {
      new import_obsidian.Setting(left).setName("Gemini API Key").addText(
        (t) => t.setPlaceholder("AIza...").setValue(this.plugin.settings.geminiApiKey).onChange(async (v) => {
          this.plugin.settings.geminiApiKey = v.trim();
          await this.plugin.saveSettings();
        })
      );
      new import_obsidian.Setting(left).setName("Gemini Model").setDesc("Default: gemini-2.5-flash").addText(
        (t) => t.setValue(this.plugin.settings.geminiModel).onChange(async (v) => {
          this.plugin.settings.geminiModel = v.trim();
          await this.plugin.saveSettings();
        })
      );
    }
    if (this.plugin.settings.provider === "cerebras") {
      new import_obsidian.Setting(left).setName("Cerebras API Key").addText(
        (t) => t.setPlaceholder("csk-...").setValue(this.plugin.settings.cerebrasApiKey).onChange(async (v) => {
          this.plugin.settings.cerebrasApiKey = v.trim();
          await this.plugin.saveSettings();
        })
      );
      new import_obsidian.Setting(left).setName("Cerebras Model").setDesc("Default: llama-3.3-70b").addText(
        (t) => t.setValue(this.plugin.settings.cerebrasModel).onChange(async (v) => {
          this.plugin.settings.cerebrasModel = v.trim();
          await this.plugin.saveSettings();
        })
      );
    }
    left.createEl("h3", { text: this.t("Profile") });
    new import_obsidian.Setting(left).setName(this.t("Primary purpose")).addDropdown(
      (d) => d.addOption("research", this.t("Research")).addOption("writing", this.t("Writing")).addOption("productivity", this.t("Productivity")).setValue(this.profile.purpose).onChange((v) => this.profile.purpose = v)
    );
    new import_obsidian.Setting(left).setName(this.t("Beginner mode")).addToggle((t) => t.setValue(this.profile.beginner).onChange((v) => this.profile.beginner = v));
    right.createEl("h3", { text: this.t("Recommendations") });
    const resultEl = right.createDiv();
    new import_obsidian.Setting(right).addButton(
      (b) => b.setButtonText(this.t("Run recommendation")).setCta().onClick(async () => {
        resultEl.empty();
        const items = recommend(this.profile);
        let textBlock = "";
        for (const item of items) {
          const card = resultEl.createDiv({ cls: "plugin-compass-card" });
          card.createEl("h4", { text: item.name[this.plugin.settings.language] });
          card.createEl("p", { text: item.summary[this.plugin.settings.language] });
          card.createEl("p", { text: `${this.t("Pros")}: ${item.pros[this.plugin.settings.language].join(", ")}` });
          card.createEl("p", { text: `${this.t("Cons")}: ${item.cons[this.plugin.settings.language].join(", ")}` });
          textBlock += `${item.name[this.plugin.settings.language]}: ${item.summary[this.plugin.settings.language]}
`;
        }
        if (this.plugin.settings.useLlmEnhancement && this.plugin.settings.provider !== "none") {
          try {
            const enhanced = await enhanceTextWithLlm(this.plugin.settings, textBlock);
            resultEl.createEl("hr");
            resultEl.createEl("p", { text: this.t("LLM summary") });
            resultEl.createEl("pre", { text: enhanced });
          } catch (e) {
            new import_obsidian.Notice(e.message ?? "LLM call failed");
          }
        }
      })
    );
  }
  t(input) {
    const lang = this.plugin.settings.language;
    const ko = {
      Settings: "\uC124\uC815",
      Language: "\uC5B8\uC5B4",
      "LLM Provider": "LLM \uC81C\uACF5\uC790",
      "Use LLM enhancement": "LLM \uC694\uC57D \uAC15\uD654 \uC0AC\uC6A9",
      Profile: "\uD504\uB85C\uD544",
      "Primary purpose": "\uC8FC \uC0AC\uC6A9 \uBAA9\uC801",
      Research: "\uB9AC\uC11C\uCE58",
      Writing: "\uAE00\uC4F0\uAE30",
      Productivity: "\uC0DD\uC0B0\uC131",
      "Beginner mode": "\uCD08\uBCF4 \uBAA8\uB4DC",
      Recommendations: "\uCD94\uCC9C \uACB0\uACFC",
      "Run recommendation": "\uCD94\uCC9C \uC2E4\uD589",
      Pros: "\uC7A5\uC810",
      Cons: "\uB2E8\uC810",
      "LLM summary": "LLM \uC694\uC57D"
    };
    if (lang === "ko") return ko[input] ?? input;
    return input;
  }
};
var PluginCompassSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Plugin Compass" });
    new import_obsidian.Setting(containerEl).setName("Open modal").setDesc("Use the modal for most operations and settings.").addButton(
      (b) => b.setButtonText("Open").onClick(() => {
        new CompassModal(this.app, this.plugin).open();
      })
    );
  }
};
//# sourceMappingURL=main.js.map
