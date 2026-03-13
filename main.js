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

// src/plugins.json
var plugins_default = [
  {
    id: "dataview",
    name: {
      en: "Dataview",
      ko: "Dataview"
    },
    summary: {
      en: "Dataview helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Dataview\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 76,
    pluginUrl: "https://obsidian.md/plugins?id=dataview"
  },
  {
    id: "templater",
    name: {
      en: "Templater",
      ko: "Templater"
    },
    summary: {
      en: "Templater helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Templater\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 73,
    pluginUrl: "https://obsidian.md/plugins?id=templater"
  },
  {
    id: "tasks",
    name: {
      en: "Tasks",
      ko: "Tasks"
    },
    summary: {
      en: "Tasks helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Tasks\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "advanced",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 70,
    pluginUrl: "https://obsidian.md/plugins?id=tasks"
  },
  {
    id: "omnisearch",
    name: {
      en: "Omnisearch",
      ko: "Omnisearch"
    },
    summary: {
      en: "Omnisearch helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Omnisearch\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "beginner",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 79,
    pluginUrl: "https://obsidian.md/plugins?id=omnisearch"
  },
  {
    id: "quickadd",
    name: {
      en: "QuickAdd",
      ko: "QuickAdd"
    },
    summary: {
      en: "QuickAdd helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "QuickAdd\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 76,
    pluginUrl: "https://obsidian.md/plugins?id=quickadd"
  },
  {
    id: "calendar",
    name: {
      en: "Calendar",
      ko: "Calendar"
    },
    summary: {
      en: "Calendar helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Calendar\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "advanced",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 73,
    pluginUrl: "https://obsidian.md/plugins?id=calendar"
  },
  {
    id: "kanban",
    name: {
      en: "Kanban",
      ko: "Kanban"
    },
    summary: {
      en: "Kanban helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Kanban\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "beginner",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 82,
    pluginUrl: "https://obsidian.md/plugins?id=kanban"
  },
  {
    id: "periodic-notes",
    name: {
      en: "Periodic Notes",
      ko: "Periodic Notes"
    },
    summary: {
      en: "Periodic Notes helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Periodic Notes\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 79,
    pluginUrl: "https://obsidian.md/plugins?id=periodic-notes"
  },
  {
    id: "excalidraw",
    name: {
      en: "Excalidraw",
      ko: "Excalidraw"
    },
    summary: {
      en: "Excalidraw helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Excalidraw\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 76,
    pluginUrl: "https://obsidian.md/plugins?id=excalidraw"
  },
  {
    id: "advanced-tables",
    name: {
      en: "Advanced Tables",
      ko: "Advanced Tables"
    },
    summary: {
      en: "Advanced Tables helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Advanced Tables\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "beginner",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 85,
    pluginUrl: "https://obsidian.md/plugins?id=advanced-tables"
  },
  {
    id: "meta-bind",
    name: {
      en: "Meta Bind",
      ko: "Meta Bind"
    },
    summary: {
      en: "Meta Bind helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Meta Bind\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 82,
    pluginUrl: "https://obsidian.md/plugins?id=meta-bind"
  },
  {
    id: "dataview-publisher",
    name: {
      en: "Dataview Publisher",
      ko: "Dataview Publisher"
    },
    summary: {
      en: "Dataview Publisher helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Dataview Publisher\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "advanced",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 79,
    pluginUrl: "https://obsidian.md/plugins?id=dataview-publisher"
  },
  {
    id: "canvas-mindmap",
    name: {
      en: "Canvas Mindmap",
      ko: "Canvas Mindmap"
    },
    summary: {
      en: "Canvas Mindmap helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Canvas Mindmap\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 88,
    pluginUrl: "https://obsidian.md/plugins?id=canvas-mindmap"
  },
  {
    id: "markdown-export",
    name: {
      en: "Markdown Export",
      ko: "Markdown Export"
    },
    summary: {
      en: "Markdown Export helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Markdown Export\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 85,
    pluginUrl: "https://obsidian.md/plugins?id=markdown-export"
  },
  {
    id: "readwise-official",
    name: {
      en: "Readwise Official",
      ko: "Readwise Official"
    },
    summary: {
      en: "Readwise Official helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Readwise Official\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "advanced",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 82,
    pluginUrl: "https://obsidian.md/plugins?id=readwise-official"
  },
  {
    id: "kindle-highlights",
    name: {
      en: "Kindle Highlights",
      ko: "Kindle Highlights"
    },
    summary: {
      en: "Kindle Highlights helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Kindle Highlights\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "beginner",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 91,
    pluginUrl: "https://obsidian.md/plugins?id=kindle-highlights"
  },
  {
    id: "zotero-integration",
    name: {
      en: "Zotero Integration",
      ko: "Zotero Integration"
    },
    summary: {
      en: "Zotero Integration helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Zotero Integration\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 88,
    pluginUrl: "https://obsidian.md/plugins?id=zotero-integration"
  },
  {
    id: "reference-linker",
    name: {
      en: "Reference Linker",
      ko: "Reference Linker"
    },
    summary: {
      en: "Reference Linker helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Reference Linker\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "advanced",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 85,
    pluginUrl: "https://obsidian.md/plugins?id=reference-linker"
  },
  {
    id: "note-refactor",
    name: {
      en: "Note Refactor",
      ko: "Note Refactor"
    },
    summary: {
      en: "Note Refactor helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Note Refactor\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "beginner",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 94,
    pluginUrl: "https://obsidian.md/plugins?id=note-refactor"
  },
  {
    id: "tag-wrangler",
    name: {
      en: "Tag Wrangler",
      ko: "Tag Wrangler"
    },
    summary: {
      en: "Tag Wrangler helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Tag Wrangler\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 91,
    pluginUrl: "https://obsidian.md/plugins?id=tag-wrangler"
  },
  {
    id: "style-settings",
    name: {
      en: "Style Settings",
      ko: "Style Settings"
    },
    summary: {
      en: "Style Settings helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Style Settings\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 88,
    pluginUrl: "https://obsidian.md/plugins?id=style-settings"
  },
  {
    id: "minimal-theme-settings",
    name: {
      en: "Minimal Theme Settings",
      ko: "Minimal Theme Settings"
    },
    summary: {
      en: "Minimal Theme Settings helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Minimal Theme Settings\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "beginner",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 97,
    pluginUrl: "https://obsidian.md/plugins?id=minimal-theme-settings"
  },
  {
    id: "commander",
    name: {
      en: "Commander",
      ko: "Commander"
    },
    summary: {
      en: "Commander helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Commander\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 94,
    pluginUrl: "https://obsidian.md/plugins?id=commander"
  },
  {
    id: "linter",
    name: {
      en: "Linter",
      ko: "Linter"
    },
    summary: {
      en: "Linter helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Linter\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "advanced",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 91,
    pluginUrl: "https://obsidian.md/plugins?id=linter"
  },
  {
    id: "editor-syntax-highlight",
    name: {
      en: "Editor Syntax Highlight",
      ko: "Editor Syntax Highlight"
    },
    summary: {
      en: "Editor Syntax Highlight helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Editor Syntax Highlight\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 100,
    pluginUrl: "https://obsidian.md/plugins?id=editor-syntax-highlight"
  },
  {
    id: "outliner",
    name: {
      en: "Outliner",
      ko: "Outliner"
    },
    summary: {
      en: "Outliner helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Outliner\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 97,
    pluginUrl: "https://obsidian.md/plugins?id=outliner"
  },
  {
    id: "longform",
    name: {
      en: "Longform",
      ko: "Longform"
    },
    summary: {
      en: "Longform helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Longform\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "advanced",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 94,
    pluginUrl: "https://obsidian.md/plugins?id=longform"
  },
  {
    id: "novel-word-count",
    name: {
      en: "Novel Word Count",
      ko: "Novel Word Count"
    },
    summary: {
      en: "Novel Word Count helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Novel Word Count\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "beginner",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 103,
    pluginUrl: "https://obsidian.md/plugins?id=novel-word-count"
  },
  {
    id: "daily-stats",
    name: {
      en: "Daily Stats",
      ko: "Daily Stats"
    },
    summary: {
      en: "Daily Stats helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Daily Stats\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 72,
    pluginUrl: "https://obsidian.md/plugins?id=daily-stats"
  },
  {
    id: "tracker",
    name: {
      en: "Tracker",
      ko: "Tracker"
    },
    summary: {
      en: "Tracker helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Tracker\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "advanced",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 69,
    pluginUrl: "https://obsidian.md/plugins?id=tracker"
  },
  {
    id: "charts-view",
    name: {
      en: "Charts View",
      ko: "Charts View"
    },
    summary: {
      en: "Charts View helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Charts View\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "beginner",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 78,
    pluginUrl: "https://obsidian.md/plugins?id=charts-view"
  },
  {
    id: "heatmap-calendar",
    name: {
      en: "Heatmap Calendar",
      ko: "Heatmap Calendar"
    },
    summary: {
      en: "Heatmap Calendar helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Heatmap Calendar\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 75,
    pluginUrl: "https://obsidian.md/plugins?id=heatmap-calendar"
  },
  {
    id: "folder-notes",
    name: {
      en: "Folder Notes",
      ko: "Folder Notes"
    },
    summary: {
      en: "Folder Notes helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Folder Notes\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 72,
    pluginUrl: "https://obsidian.md/plugins?id=folder-notes"
  },
  {
    id: "waypoint",
    name: {
      en: "Waypoint",
      ko: "Waypoint"
    },
    summary: {
      en: "Waypoint helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Waypoint\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "beginner",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 81,
    pluginUrl: "https://obsidian.md/plugins?id=waypoint"
  },
  {
    id: "map-view",
    name: {
      en: "Map View",
      ko: "Map View"
    },
    summary: {
      en: "Map View helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Map View\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 78,
    pluginUrl: "https://obsidian.md/plugins?id=map-view"
  },
  {
    id: "local-images-plus",
    name: {
      en: "Local Images Plus",
      ko: "Local Images Plus"
    },
    summary: {
      en: "Local Images Plus helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Local Images Plus\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "advanced",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 75,
    pluginUrl: "https://obsidian.md/plugins?id=local-images-plus"
  },
  {
    id: "image-toolkit",
    name: {
      en: "Image Toolkit",
      ko: "Image Toolkit"
    },
    summary: {
      en: "Image Toolkit helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Image Toolkit\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 84,
    pluginUrl: "https://obsidian.md/plugins?id=image-toolkit"
  },
  {
    id: "audio-recorder",
    name: {
      en: "Audio Recorder",
      ko: "Audio Recorder"
    },
    summary: {
      en: "Audio Recorder helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Audio Recorder\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 81,
    pluginUrl: "https://obsidian.md/plugins?id=audio-recorder"
  },
  {
    id: "voice-notes",
    name: {
      en: "Voice Notes",
      ko: "Voice Notes"
    },
    summary: {
      en: "Voice Notes helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Voice Notes\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "advanced",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 78,
    pluginUrl: "https://obsidian.md/plugins?id=voice-notes"
  },
  {
    id: "transcript-helper",
    name: {
      en: "Transcript Helper",
      ko: "Transcript Helper"
    },
    summary: {
      en: "Transcript Helper helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Transcript Helper\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "beginner",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 87,
    pluginUrl: "https://obsidian.md/plugins?id=transcript-helper"
  },
  {
    id: "pdf",
    name: {
      en: "PDF++",
      ko: "PDF++"
    },
    summary: {
      en: "PDF++ helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "PDF++\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 84,
    pluginUrl: "https://obsidian.md/plugins?id=pdf"
  },
  {
    id: "annotator",
    name: {
      en: "Annotator",
      ko: "Annotator"
    },
    summary: {
      en: "Annotator helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Annotator\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "advanced",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 81,
    pluginUrl: "https://obsidian.md/plugins?id=annotator"
  },
  {
    id: "citation-manager",
    name: {
      en: "Citation Manager",
      ko: "Citation Manager"
    },
    summary: {
      en: "Citation Manager helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Citation Manager\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "beginner",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 90,
    pluginUrl: "https://obsidian.md/plugins?id=citation-manager"
  },
  {
    id: "backlinks-explorer",
    name: {
      en: "Backlinks Explorer",
      ko: "Backlinks Explorer"
    },
    summary: {
      en: "Backlinks Explorer helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Backlinks Explorer\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 87,
    pluginUrl: "https://obsidian.md/plugins?id=backlinks-explorer"
  },
  {
    id: "graph-analysis",
    name: {
      en: "Graph Analysis",
      ko: "Graph Analysis"
    },
    summary: {
      en: "Graph Analysis helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Graph Analysis\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 84,
    pluginUrl: "https://obsidian.md/plugins?id=graph-analysis"
  },
  {
    id: "file-cleaner",
    name: {
      en: "File Cleaner",
      ko: "File Cleaner"
    },
    summary: {
      en: "File Cleaner helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "File Cleaner\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "beginner",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 93,
    pluginUrl: "https://obsidian.md/plugins?id=file-cleaner"
  },
  {
    id: "attachment-manager",
    name: {
      en: "Attachment Manager",
      ko: "Attachment Manager"
    },
    summary: {
      en: "Attachment Manager helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Attachment Manager\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 90,
    pluginUrl: "https://obsidian.md/plugins?id=attachment-manager"
  },
  {
    id: "smart-rename",
    name: {
      en: "Smart Rename",
      ko: "Smart Rename"
    },
    summary: {
      en: "Smart Rename helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Smart Rename\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "advanced",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 87,
    pluginUrl: "https://obsidian.md/plugins?id=smart-rename"
  },
  {
    id: "quick-switcher",
    name: {
      en: "Quick Switcher++",
      ko: "Quick Switcher++"
    },
    summary: {
      en: "Quick Switcher++ helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Quick Switcher++\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 96,
    pluginUrl: "https://obsidian.md/plugins?id=quick-switcher"
  },
  {
    id: "recent-files-pro",
    name: {
      en: "Recent Files Pro",
      ko: "Recent Files Pro"
    },
    summary: {
      en: "Recent Files Pro helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Recent Files Pro\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 93,
    pluginUrl: "https://obsidian.md/plugins?id=recent-files-pro"
  },
  {
    id: "homepage",
    name: {
      en: "Homepage",
      ko: "Homepage"
    },
    summary: {
      en: "Homepage helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Homepage\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "advanced",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 90,
    pluginUrl: "https://obsidian.md/plugins?id=homepage"
  },
  {
    id: "workspace-plus",
    name: {
      en: "Workspace Plus",
      ko: "Workspace Plus"
    },
    summary: {
      en: "Workspace Plus helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Workspace Plus\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "beginner",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 99,
    pluginUrl: "https://obsidian.md/plugins?id=workspace-plus"
  },
  {
    id: "pane-relief",
    name: {
      en: "Pane Relief",
      ko: "Pane Relief"
    },
    summary: {
      en: "Pane Relief helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Pane Relief\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 96,
    pluginUrl: "https://obsidian.md/plugins?id=pane-relief"
  },
  {
    id: "tab-manager",
    name: {
      en: "Tab Manager",
      ko: "Tab Manager"
    },
    summary: {
      en: "Tab Manager helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Tab Manager\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "advanced",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 93,
    pluginUrl: "https://obsidian.md/plugins?id=tab-manager"
  },
  {
    id: "focus-mode",
    name: {
      en: "Focus Mode",
      ko: "Focus Mode"
    },
    summary: {
      en: "Focus Mode helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Focus Mode\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "beginner",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 102,
    pluginUrl: "https://obsidian.md/plugins?id=focus-mode"
  },
  {
    id: "pomodoro-notes",
    name: {
      en: "Pomodoro Notes",
      ko: "Pomodoro Notes"
    },
    summary: {
      en: "Pomodoro Notes helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Pomodoro Notes\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 99,
    pluginUrl: "https://obsidian.md/plugins?id=pomodoro-notes"
  },
  {
    id: "reading-time",
    name: {
      en: "Reading Time",
      ko: "Reading Time"
    },
    summary: {
      en: "Reading Time helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Reading Time\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 68,
    pluginUrl: "https://obsidian.md/plugins?id=reading-time"
  },
  {
    id: "session-logger",
    name: {
      en: "Session Logger",
      ko: "Session Logger"
    },
    summary: {
      en: "Session Logger helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Session Logger\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "beginner",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 77,
    pluginUrl: "https://obsidian.md/plugins?id=session-logger"
  },
  {
    id: "ritual-planner",
    name: {
      en: "Ritual Planner",
      ko: "Ritual Planner"
    },
    summary: {
      en: "Ritual Planner helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Ritual Planner\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 74,
    pluginUrl: "https://obsidian.md/plugins?id=ritual-planner"
  },
  {
    id: "meeting-notes",
    name: {
      en: "Meeting Notes",
      ko: "Meeting Notes"
    },
    summary: {
      en: "Meeting Notes helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Meeting Notes\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "advanced",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 71,
    pluginUrl: "https://obsidian.md/plugins?id=meeting-notes"
  },
  {
    id: "agenda-builder",
    name: {
      en: "Agenda Builder",
      ko: "Agenda Builder"
    },
    summary: {
      en: "Agenda Builder helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Agenda Builder\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 80,
    pluginUrl: "https://obsidian.md/plugins?id=agenda-builder"
  },
  {
    id: "project-board",
    name: {
      en: "Project Board",
      ko: "Project Board"
    },
    summary: {
      en: "Project Board helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Project Board\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 77,
    pluginUrl: "https://obsidian.md/plugins?id=project-board"
  },
  {
    id: "sprint-planner",
    name: {
      en: "Sprint Planner",
      ko: "Sprint Planner"
    },
    summary: {
      en: "Sprint Planner helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Sprint Planner\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "advanced",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 74,
    pluginUrl: "https://obsidian.md/plugins?id=sprint-planner"
  },
  {
    id: "roadmap-notes",
    name: {
      en: "Roadmap Notes",
      ko: "Roadmap Notes"
    },
    summary: {
      en: "Roadmap Notes helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Roadmap Notes\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "beginner",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 83,
    pluginUrl: "https://obsidian.md/plugins?id=roadmap-notes"
  },
  {
    id: "goal-tracker",
    name: {
      en: "Goal Tracker",
      ko: "Goal Tracker"
    },
    summary: {
      en: "Goal Tracker helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Goal Tracker\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 80,
    pluginUrl: "https://obsidian.md/plugins?id=goal-tracker"
  },
  {
    id: "habit-matrix",
    name: {
      en: "Habit Matrix",
      ko: "Habit Matrix"
    },
    summary: {
      en: "Habit Matrix helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Habit Matrix\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "advanced",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 77,
    pluginUrl: "https://obsidian.md/plugins?id=habit-matrix"
  },
  {
    id: "journal-prompts",
    name: {
      en: "Journal Prompts",
      ko: "Journal Prompts"
    },
    summary: {
      en: "Journal Prompts helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Journal Prompts\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "beginner",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 86,
    pluginUrl: "https://obsidian.md/plugins?id=journal-prompts"
  },
  {
    id: "mood-tracker",
    name: {
      en: "Mood Tracker",
      ko: "Mood Tracker"
    },
    summary: {
      en: "Mood Tracker helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Mood Tracker\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 83,
    pluginUrl: "https://obsidian.md/plugins?id=mood-tracker"
  },
  {
    id: "sleep-log",
    name: {
      en: "Sleep Log",
      ko: "Sleep Log"
    },
    summary: {
      en: "Sleep Log helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Sleep Log\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 80,
    pluginUrl: "https://obsidian.md/plugins?id=sleep-log"
  },
  {
    id: "workout-log",
    name: {
      en: "Workout Log",
      ko: "Workout Log"
    },
    summary: {
      en: "Workout Log helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Workout Log\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "beginner",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 89,
    pluginUrl: "https://obsidian.md/plugins?id=workout-log"
  },
  {
    id: "recipe-vault",
    name: {
      en: "Recipe Vault",
      ko: "Recipe Vault"
    },
    summary: {
      en: "Recipe Vault helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Recipe Vault\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 86,
    pluginUrl: "https://obsidian.md/plugins?id=recipe-vault"
  },
  {
    id: "finance-ledger",
    name: {
      en: "Finance Ledger",
      ko: "Finance Ledger"
    },
    summary: {
      en: "Finance Ledger helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Finance Ledger\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "advanced",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 83,
    pluginUrl: "https://obsidian.md/plugins?id=finance-ledger"
  },
  {
    id: "budget-planner",
    name: {
      en: "Budget Planner",
      ko: "Budget Planner"
    },
    summary: {
      en: "Budget Planner helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Budget Planner\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 92,
    pluginUrl: "https://obsidian.md/plugins?id=budget-planner"
  },
  {
    id: "invoice-notes",
    name: {
      en: "Invoice Notes",
      ko: "Invoice Notes"
    },
    summary: {
      en: "Invoice Notes helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Invoice Notes\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 89,
    pluginUrl: "https://obsidian.md/plugins?id=invoice-notes"
  },
  {
    id: "crm-lite",
    name: {
      en: "CRM Lite",
      ko: "CRM Lite"
    },
    summary: {
      en: "CRM Lite helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "CRM Lite\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "advanced",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 86,
    pluginUrl: "https://obsidian.md/plugins?id=crm-lite"
  },
  {
    id: "client-notes",
    name: {
      en: "Client Notes",
      ko: "Client Notes"
    },
    summary: {
      en: "Client Notes helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Client Notes\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "beginner",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 95,
    pluginUrl: "https://obsidian.md/plugins?id=client-notes"
  },
  {
    id: "research-hub",
    name: {
      en: "Research Hub",
      ko: "Research Hub"
    },
    summary: {
      en: "Research Hub helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Research Hub\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 92,
    pluginUrl: "https://obsidian.md/plugins?id=research-hub"
  },
  {
    id: "paper-digest",
    name: {
      en: "Paper Digest",
      ko: "Paper Digest"
    },
    summary: {
      en: "Paper Digest helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Paper Digest\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "advanced",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 89,
    pluginUrl: "https://obsidian.md/plugins?id=paper-digest"
  },
  {
    id: "snippet-manager",
    name: {
      en: "Snippet Manager",
      ko: "Snippet Manager"
    },
    summary: {
      en: "Snippet Manager helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Snippet Manager\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "beginner",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 98,
    pluginUrl: "https://obsidian.md/plugins?id=snippet-manager"
  },
  {
    id: "code-block-tools",
    name: {
      en: "Code Block Tools",
      ko: "Code Block Tools"
    },
    summary: {
      en: "Code Block Tools helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Code Block Tools\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 95,
    pluginUrl: "https://obsidian.md/plugins?id=code-block-tools"
  },
  {
    id: "terminal-embed",
    name: {
      en: "Terminal Embed",
      ko: "Terminal Embed"
    },
    summary: {
      en: "Terminal Embed helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Terminal Embed\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 92,
    pluginUrl: "https://obsidian.md/plugins?id=terminal-embed"
  },
  {
    id: "git-notes",
    name: {
      en: "Git Notes",
      ko: "Git Notes"
    },
    summary: {
      en: "Git Notes helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Git Notes\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "beginner",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 101,
    pluginUrl: "https://obsidian.md/plugins?id=git-notes"
  },
  {
    id: "publish-helper",
    name: {
      en: "Publish Helper",
      ko: "Publish Helper"
    },
    summary: {
      en: "Publish Helper helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Publish Helper\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 98,
    pluginUrl: "https://obsidian.md/plugins?id=publish-helper"
  },
  {
    id: "seo-draft",
    name: {
      en: "SEO Draft",
      ko: "SEO Draft"
    },
    summary: {
      en: "SEO Draft helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "SEO Draft\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "advanced",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 95,
    pluginUrl: "https://obsidian.md/plugins?id=seo-draft"
  },
  {
    id: "web-clipper-plus",
    name: {
      en: "Web Clipper Plus",
      ko: "Web Clipper Plus"
    },
    summary: {
      en: "Web Clipper Plus helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Web Clipper Plus\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 76,
    pluginUrl: "https://obsidian.md/plugins?id=web-clipper-plus"
  },
  {
    id: "rss-digest",
    name: {
      en: "RSS Digest",
      ko: "RSS Digest"
    },
    summary: {
      en: "RSS Digest helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "RSS Digest\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 73,
    pluginUrl: "https://obsidian.md/plugins?id=rss-digest"
  },
  {
    id: "newsletter-composer",
    name: {
      en: "Newsletter Composer",
      ko: "Newsletter Composer"
    },
    summary: {
      en: "Newsletter Composer helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Newsletter Composer\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "advanced",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 70,
    pluginUrl: "https://obsidian.md/plugins?id=newsletter-composer"
  },
  {
    id: "slide-builder",
    name: {
      en: "Slide Builder",
      ko: "Slide Builder"
    },
    summary: {
      en: "Slide Builder helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Slide Builder\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "beginner",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 79,
    pluginUrl: "https://obsidian.md/plugins?id=slide-builder"
  },
  {
    id: "presentation-notes",
    name: {
      en: "Presentation Notes",
      ko: "Presentation Notes"
    },
    summary: {
      en: "Presentation Notes helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Presentation Notes\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 76,
    pluginUrl: "https://obsidian.md/plugins?id=presentation-notes"
  },
  {
    id: "flashcards",
    name: {
      en: "Flashcards",
      ko: "Flashcards"
    },
    summary: {
      en: "Flashcards helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Flashcards\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "advanced",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 73,
    pluginUrl: "https://obsidian.md/plugins?id=flashcards"
  },
  {
    id: "spaced-recall",
    name: {
      en: "Spaced Recall",
      ko: "Spaced Recall"
    },
    summary: {
      en: "Spaced Recall helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Spaced Recall\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "beginner",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 82,
    pluginUrl: "https://obsidian.md/plugins?id=spaced-recall"
  },
  {
    id: "language-drill",
    name: {
      en: "Language Drill",
      ko: "Language Drill"
    },
    summary: {
      en: "Language Drill helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Language Drill\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 79,
    pluginUrl: "https://obsidian.md/plugins?id=language-drill"
  },
  {
    id: "kanji-helper",
    name: {
      en: "Kanji Helper",
      ko: "Kanji Helper"
    },
    summary: {
      en: "Kanji Helper helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Kanji Helper\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 76,
    pluginUrl: "https://obsidian.md/plugins?id=kanji-helper"
  },
  {
    id: "vocabulary-vault",
    name: {
      en: "Vocabulary Vault",
      ko: "Vocabulary Vault"
    },
    summary: {
      en: "Vocabulary Vault helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Vocabulary Vault\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "beginner",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 85,
    pluginUrl: "https://obsidian.md/plugins?id=vocabulary-vault"
  },
  {
    id: "bible-study-toolkit",
    name: {
      en: "Bible Study Toolkit",
      ko: "Bible Study Toolkit"
    },
    summary: {
      en: "Bible Study Toolkit helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Bible Study Toolkit\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 82,
    pluginUrl: "https://obsidian.md/plugins?id=bible-study-toolkit"
  },
  {
    id: "meditation-journal",
    name: {
      en: "Meditation Journal",
      ko: "Meditation Journal"
    },
    summary: {
      en: "Meditation Journal helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Meditation Journal\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "advanced",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 79,
    pluginUrl: "https://obsidian.md/plugins?id=meditation-journal"
  },
  {
    id: "travel-planner",
    name: {
      en: "Travel Planner",
      ko: "Travel Planner"
    },
    summary: {
      en: "Travel Planner helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Travel Planner\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 88,
    pluginUrl: "https://obsidian.md/plugins?id=travel-planner"
  },
  {
    id: "trip-cost",
    name: {
      en: "Trip Cost",
      ko: "Trip Cost"
    },
    summary: {
      en: "Trip Cost helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Trip Cost\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 85,
    pluginUrl: "https://obsidian.md/plugins?id=trip-cost"
  },
  {
    id: "packing-list",
    name: {
      en: "Packing List",
      ko: "Packing List"
    },
    summary: {
      en: "Packing List helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Packing List\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "advanced",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 82,
    pluginUrl: "https://obsidian.md/plugins?id=packing-list"
  },
  {
    id: "bookmarks-sync",
    name: {
      en: "Bookmarks Sync",
      ko: "Bookmarks Sync"
    },
    summary: {
      en: "Bookmarks Sync helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Bookmarks Sync\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "beginner",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 91,
    pluginUrl: "https://obsidian.md/plugins?id=bookmarks-sync"
  },
  {
    id: "link-archive",
    name: {
      en: "Link Archive",
      ko: "Link Archive"
    },
    summary: {
      en: "Link Archive helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Link Archive\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 88,
    pluginUrl: "https://obsidian.md/plugins?id=link-archive"
  },
  {
    id: "url-metadata",
    name: {
      en: "URL Metadata",
      ko: "URL Metadata"
    },
    summary: {
      en: "URL Metadata helps with task workflows in Obsidian with clear, practical steps.",
      ko: "URL Metadata\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "advanced",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 85,
    pluginUrl: "https://obsidian.md/plugins?id=url-metadata"
  },
  {
    id: "web-snapshot",
    name: {
      en: "Web Snapshot",
      ko: "Web Snapshot"
    },
    summary: {
      en: "Web Snapshot helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Web Snapshot\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "beginner",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 94,
    pluginUrl: "https://obsidian.md/plugins?id=web-snapshot"
  },
  {
    id: "wayback-helper",
    name: {
      en: "Wayback Helper",
      ko: "Wayback Helper"
    },
    summary: {
      en: "Wayback Helper helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Wayback Helper\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 91,
    pluginUrl: "https://obsidian.md/plugins?id=wayback-helper"
  },
  {
    id: "backup-guard",
    name: {
      en: "Backup Guard",
      ko: "Backup Guard"
    },
    summary: {
      en: "Backup Guard helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Backup Guard\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 88,
    pluginUrl: "https://obsidian.md/plugins?id=backup-guard"
  },
  {
    id: "vault-audit",
    name: {
      en: "Vault Audit",
      ko: "Vault Audit"
    },
    summary: {
      en: "Vault Audit helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Vault Audit\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "beginner",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 97,
    pluginUrl: "https://obsidian.md/plugins?id=vault-audit"
  },
  {
    id: "broken-link-finder",
    name: {
      en: "Broken Link Finder",
      ko: "Broken Link Finder"
    },
    summary: {
      en: "Broken Link Finder helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Broken Link Finder\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 94,
    pluginUrl: "https://obsidian.md/plugins?id=broken-link-finder"
  },
  {
    id: "frontmatter-forms",
    name: {
      en: "Frontmatter Forms",
      ko: "Frontmatter Forms"
    },
    summary: {
      en: "Frontmatter Forms helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Frontmatter Forms\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "advanced",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 91,
    pluginUrl: "https://obsidian.md/plugins?id=frontmatter-forms"
  },
  {
    id: "metadata-menu",
    name: {
      en: "Metadata Menu",
      ko: "Metadata Menu"
    },
    summary: {
      en: "Metadata Menu helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Metadata Menu\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 100,
    pluginUrl: "https://obsidian.md/plugins?id=metadata-menu"
  },
  {
    id: "property-lens",
    name: {
      en: "Property Lens",
      ko: "Property Lens"
    },
    summary: {
      en: "Property Lens helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Property Lens\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 97,
    pluginUrl: "https://obsidian.md/plugins?id=property-lens"
  },
  {
    id: "template-studio",
    name: {
      en: "Template Studio",
      ko: "Template Studio"
    },
    summary: {
      en: "Template Studio helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Template Studio\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "advanced",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 94,
    pluginUrl: "https://obsidian.md/plugins?id=template-studio"
  },
  {
    id: "quick-templates",
    name: {
      en: "Quick Templates",
      ko: "Quick Templates"
    },
    summary: {
      en: "Quick Templates helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Quick Templates\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "beginner",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 103,
    pluginUrl: "https://obsidian.md/plugins?id=quick-templates"
  },
  {
    id: "macro-runner",
    name: {
      en: "Macro Runner",
      ko: "Macro Runner"
    },
    summary: {
      en: "Macro Runner helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Macro Runner\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 72,
    pluginUrl: "https://obsidian.md/plugins?id=macro-runner"
  },
  {
    id: "command-palette-plus",
    name: {
      en: "Command Palette Plus",
      ko: "Command Palette Plus"
    },
    summary: {
      en: "Command Palette Plus helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Command Palette Plus\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "advanced",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 69,
    pluginUrl: "https://obsidian.md/plugins?id=command-palette-plus"
  },
  {
    id: "keymap-profiles",
    name: {
      en: "Keymap Profiles",
      ko: "Keymap Profiles"
    },
    summary: {
      en: "Keymap Profiles helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Keymap Profiles\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "beginner",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 78,
    pluginUrl: "https://obsidian.md/plugins?id=keymap-profiles"
  },
  {
    id: "mobile-toolbar",
    name: {
      en: "Mobile Toolbar",
      ko: "Mobile Toolbar"
    },
    summary: {
      en: "Mobile Toolbar helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Mobile Toolbar\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 75,
    pluginUrl: "https://obsidian.md/plugins?id=mobile-toolbar"
  },
  {
    id: "touch-shortcuts",
    name: {
      en: "Touch Shortcuts",
      ko: "Touch Shortcuts"
    },
    summary: {
      en: "Touch Shortcuts helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Touch Shortcuts\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 72,
    pluginUrl: "https://obsidian.md/plugins?id=touch-shortcuts"
  },
  {
    id: "offline-sync-queue",
    name: {
      en: "Offline Sync Queue",
      ko: "Offline Sync Queue"
    },
    summary: {
      en: "Offline Sync Queue helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Offline Sync Queue\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "beginner",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 81,
    pluginUrl: "https://obsidian.md/plugins?id=offline-sync-queue"
  },
  {
    id: "sync-conflict-helper",
    name: {
      en: "Sync Conflict Helper",
      ko: "Sync Conflict Helper"
    },
    summary: {
      en: "Sync Conflict Helper helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Sync Conflict Helper\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 78,
    pluginUrl: "https://obsidian.md/plugins?id=sync-conflict-helper"
  },
  {
    id: "cloud-mirror",
    name: {
      en: "Cloud Mirror",
      ko: "Cloud Mirror"
    },
    summary: {
      en: "Cloud Mirror helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Cloud Mirror\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "advanced",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 75,
    pluginUrl: "https://obsidian.md/plugins?id=cloud-mirror"
  },
  {
    id: "git-auto-commit",
    name: {
      en: "Git Auto Commit",
      ko: "Git Auto Commit"
    },
    summary: {
      en: "Git Auto Commit helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Git Auto Commit\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 84,
    pluginUrl: "https://obsidian.md/plugins?id=git-auto-commit"
  },
  {
    id: "version-timeline",
    name: {
      en: "Version Timeline",
      ko: "Version Timeline"
    },
    summary: {
      en: "Version Timeline helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Version Timeline\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 81,
    pluginUrl: "https://obsidian.md/plugins?id=version-timeline"
  },
  {
    id: "recovery-center",
    name: {
      en: "Recovery Center",
      ko: "Recovery Center"
    },
    summary: {
      en: "Recovery Center helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Recovery Center\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "advanced",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 78,
    pluginUrl: "https://obsidian.md/plugins?id=recovery-center"
  },
  {
    id: "plugin-health",
    name: {
      en: "Plugin Health",
      ko: "Plugin Health"
    },
    summary: {
      en: "Plugin Health helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Plugin Health\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "beginner",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 87,
    pluginUrl: "https://obsidian.md/plugins?id=plugin-health"
  },
  {
    id: "update-watcher",
    name: {
      en: "Update Watcher",
      ko: "Update Watcher"
    },
    summary: {
      en: "Update Watcher helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Update Watcher\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 84,
    pluginUrl: "https://obsidian.md/plugins?id=update-watcher"
  },
  {
    id: "community-radar",
    name: {
      en: "Community Radar",
      ko: "Community Radar"
    },
    summary: {
      en: "Community Radar helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Community Radar\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "advanced",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 81,
    pluginUrl: "https://obsidian.md/plugins?id=community-radar"
  },
  {
    id: "release-notes-feed",
    name: {
      en: "Release Notes Feed",
      ko: "Release Notes Feed"
    },
    summary: {
      en: "Release Notes Feed helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Release Notes Feed\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "beginner",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 90,
    pluginUrl: "https://obsidian.md/plugins?id=release-notes-feed"
  },
  {
    id: "weekly-digest-generator",
    name: {
      en: "Weekly Digest Generator",
      ko: "Weekly Digest Generator"
    },
    summary: {
      en: "Weekly Digest Generator helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Weekly Digest Generator\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 87,
    pluginUrl: "https://obsidian.md/plugins?id=weekly-digest-generator"
  },
  {
    id: "setup-wizard",
    name: {
      en: "Setup Wizard",
      ko: "Setup Wizard"
    },
    summary: {
      en: "Setup Wizard helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Setup Wizard\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 84,
    pluginUrl: "https://obsidian.md/plugins?id=setup-wizard"
  },
  {
    id: "new-vault-bootstrap",
    name: {
      en: "New Vault Bootstrap",
      ko: "New Vault Bootstrap"
    },
    summary: {
      en: "New Vault Bootstrap helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "New Vault Bootstrap\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "beginner",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 93,
    pluginUrl: "https://obsidian.md/plugins?id=new-vault-bootstrap"
  },
  {
    id: "starter-kits",
    name: {
      en: "Starter Kits",
      ko: "Starter Kits"
    },
    summary: {
      en: "Starter Kits helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Starter Kits\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 90,
    pluginUrl: "https://obsidian.md/plugins?id=starter-kits"
  },
  {
    id: "learning-path",
    name: {
      en: "Learning Path",
      ko: "Learning Path"
    },
    summary: {
      en: "Learning Path helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Learning Path\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "advanced",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 87,
    pluginUrl: "https://obsidian.md/plugins?id=learning-path"
  },
  {
    id: "plugin-compass-picks",
    name: {
      en: "Plugin Compass Picks",
      ko: "Plugin Compass Picks"
    },
    summary: {
      en: "Plugin Compass Picks helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Plugin Compass Picks\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 96,
    pluginUrl: "https://obsidian.md/plugins?id=plugin-compass-picks"
  },
  {
    id: "recommendation-lab",
    name: {
      en: "Recommendation Lab",
      ko: "Recommendation Lab"
    },
    summary: {
      en: "Recommendation Lab helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Recommendation Lab\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 93,
    pluginUrl: "https://obsidian.md/plugins?id=recommendation-lab"
  },
  {
    id: "persona-profiles",
    name: {
      en: "Persona Profiles",
      ko: "Persona Profiles"
    },
    summary: {
      en: "Persona Profiles helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Persona Profiles\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "advanced",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 90,
    pluginUrl: "https://obsidian.md/plugins?id=persona-profiles"
  },
  {
    id: "focus-dashboard",
    name: {
      en: "Focus Dashboard",
      ko: "Focus Dashboard"
    },
    summary: {
      en: "Focus Dashboard helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Focus Dashboard\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "beginner",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 99,
    pluginUrl: "https://obsidian.md/plugins?id=focus-dashboard"
  },
  {
    id: "deep-work-mode",
    name: {
      en: "Deep Work Mode",
      ko: "Deep Work Mode"
    },
    summary: {
      en: "Deep Work Mode helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Deep Work Mode\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 96,
    pluginUrl: "https://obsidian.md/plugins?id=deep-work-mode"
  },
  {
    id: "review-checklist",
    name: {
      en: "Review Checklist",
      ko: "Review Checklist"
    },
    summary: {
      en: "Review Checklist helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Review Checklist\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "advanced",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 93,
    pluginUrl: "https://obsidian.md/plugins?id=review-checklist"
  },
  {
    id: "weekly-review",
    name: {
      en: "Weekly Review",
      ko: "Weekly Review"
    },
    summary: {
      en: "Weekly Review helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Weekly Review\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "beginner",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 102,
    pluginUrl: "https://obsidian.md/plugins?id=weekly-review"
  },
  {
    id: "monthly-review",
    name: {
      en: "Monthly Review",
      ko: "Monthly Review"
    },
    summary: {
      en: "Monthly Review helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Monthly Review\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 99,
    pluginUrl: "https://obsidian.md/plugins?id=monthly-review"
  },
  {
    id: "quarterly-review",
    name: {
      en: "Quarterly Review",
      ko: "Quarterly Review"
    },
    summary: {
      en: "Quarterly Review helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "Quarterly Review\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "capture",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 68,
    pluginUrl: "https://obsidian.md/plugins?id=quarterly-review"
  },
  {
    id: "yearly-reflection",
    name: {
      en: "Yearly Reflection",
      ko: "Yearly Reflection"
    },
    summary: {
      en: "Yearly Reflection helps with task workflows in Obsidian with clear, practical steps.",
      ko: "Yearly Reflection\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "beginner",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 77,
    pluginUrl: "https://obsidian.md/plugins?id=yearly-reflection"
  },
  {
    id: "habit-coach",
    name: {
      en: "Habit Coach",
      ko: "Habit Coach"
    },
    summary: {
      en: "Habit Coach helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "Habit Coach\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "writing",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 74,
    pluginUrl: "https://obsidian.md/plugins?id=habit-coach"
  },
  {
    id: "goal-coach",
    name: {
      en: "Goal Coach",
      ko: "Goal Coach"
    },
    summary: {
      en: "Goal Coach helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "Goal Coach\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "advanced",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 71,
    pluginUrl: "https://obsidian.md/plugins?id=goal-coach"
  },
  {
    id: "writing-coach",
    name: {
      en: "Writing Coach",
      ko: "Writing Coach"
    },
    summary: {
      en: "Writing Coach helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "Writing Coach\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "visual",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 80,
    pluginUrl: "https://obsidian.md/plugins?id=writing-coach"
  },
  {
    id: "research-coach",
    name: {
      en: "Research Coach",
      ko: "Research Coach"
    },
    summary: {
      en: "Research Coach helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Research Coach\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 77,
    pluginUrl: "https://obsidian.md/plugins?id=research-coach"
  },
  {
    id: "study-coach",
    name: {
      en: "Study Coach",
      ko: "Study Coach"
    },
    summary: {
      en: "Study Coach helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Study Coach\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "advanced",
      "mobile",
      "community"
    ],
    category: "review",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 74,
    pluginUrl: "https://obsidian.md/plugins?id=study-coach"
  },
  {
    id: "prompt-library",
    name: {
      en: "Prompt Library",
      ko: "Prompt Library"
    },
    summary: {
      en: "Prompt Library helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "Prompt Library\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "beginner",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 83,
    pluginUrl: "https://obsidian.md/plugins?id=prompt-library"
  },
  {
    id: "ai-summarizer",
    name: {
      en: "AI Summarizer",
      ko: "AI Summarizer"
    },
    summary: {
      en: "AI Summarizer helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "AI Summarizer\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "intermediate",
      "desktop-first",
      "community"
    ],
    category: "publish",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 80,
    pluginUrl: "https://obsidian.md/plugins?id=ai-summarizer"
  },
  {
    id: "ai-translator",
    name: {
      en: "AI Translator",
      ko: "AI Translator"
    },
    summary: {
      en: "AI Translator helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "AI Translator\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "advanced",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 77,
    pluginUrl: "https://obsidian.md/plugins?id=ai-translator"
  },
  {
    id: "ai-refiner",
    name: {
      en: "AI Refiner",
      ko: "AI Refiner"
    },
    summary: {
      en: "AI Refiner helps with capture workflows in Obsidian with clear, practical steps.",
      ko: "AI Refiner\uB294 Obsidian\uC5D0\uC11C capture \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for capture routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "capture \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "capture",
      "beginner",
      "mobile",
      "community"
    ],
    category: "capture",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 86,
    pluginUrl: "https://obsidian.md/plugins?id=ai-refiner"
  },
  {
    id: "ai-outline",
    name: {
      en: "AI Outline",
      ko: "AI Outline"
    },
    summary: {
      en: "AI Outline helps with task workflows in Obsidian with clear, practical steps.",
      ko: "AI Outline\uB294 Obsidian\uC5D0\uC11C task \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for task routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "task \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "task",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "task",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 83,
    pluginUrl: "https://obsidian.md/plugins?id=ai-outline"
  },
  {
    id: "ai-flashcards",
    name: {
      en: "AI Flashcards",
      ko: "AI Flashcards"
    },
    summary: {
      en: "AI Flashcards helps with writing workflows in Obsidian with clear, practical steps.",
      ko: "AI Flashcards\uB294 Obsidian\uC5D0\uC11C writing \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for writing routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "writing \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "writing",
      "advanced",
      "desktop-first",
      "community"
    ],
    category: "writing",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: false,
    recommendationScore: 80,
    pluginUrl: "https://obsidian.md/plugins?id=ai-flashcards"
  },
  {
    id: "ai-search-assistant",
    name: {
      en: "AI Search Assistant",
      ko: "AI Search Assistant"
    },
    summary: {
      en: "AI Search Assistant helps with knowledge workflows in Obsidian with clear, practical steps.",
      ko: "AI Search Assistant\uB294 Obsidian\uC5D0\uC11C knowledge \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for knowledge routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "knowledge \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "knowledge",
      "beginner",
      "mobile",
      "community"
    ],
    category: "knowledge",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 89,
    pluginUrl: "https://obsidian.md/plugins?id=ai-search-assistant"
  },
  {
    id: "ai-commander",
    name: {
      en: "AI Commander",
      ko: "AI Commander"
    },
    summary: {
      en: "AI Commander helps with visual workflows in Obsidian with clear, practical steps.",
      ko: "AI Commander\uB294 Obsidian\uC5D0\uC11C visual \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for visual routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "visual \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "visual",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "visual",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 86,
    pluginUrl: "https://obsidian.md/plugins?id=ai-commander"
  },
  {
    id: "cerebras-bridge",
    name: {
      en: "Cerebras Bridge",
      ko: "Cerebras Bridge"
    },
    summary: {
      en: "Cerebras Bridge helps with automation workflows in Obsidian with clear, practical steps.",
      ko: "Cerebras Bridge\uB294 Obsidian\uC5D0\uC11C automation \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for automation routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "automation \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "automation",
      "advanced",
      "mobile",
      "community"
    ],
    category: "automation",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 83,
    pluginUrl: "https://obsidian.md/plugins?id=cerebras-bridge"
  },
  {
    id: "gemini-bridge",
    name: {
      en: "Gemini Bridge",
      ko: "Gemini Bridge"
    },
    summary: {
      en: "Gemini Bridge helps with review workflows in Obsidian with clear, practical steps.",
      ko: "Gemini Bridge\uB294 Obsidian\uC5D0\uC11C review \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for review routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "review \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "review",
      "beginner",
      "desktop-first",
      "community"
    ],
    category: "review",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: false,
    recommendationScore: 92,
    pluginUrl: "https://obsidian.md/plugins?id=gemini-bridge"
  },
  {
    id: "llm-cost-tracker",
    name: {
      en: "LLM Cost Tracker",
      ko: "LLM Cost Tracker"
    },
    summary: {
      en: "LLM Cost Tracker helps with sync workflows in Obsidian with clear, practical steps.",
      ko: "LLM Cost Tracker\uB294 Obsidian\uC5D0\uC11C sync \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for sync routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "sync \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "sync",
      "intermediate",
      "mobile",
      "community"
    ],
    category: "sync",
    difficulty: "intermediate",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 89,
    pluginUrl: "https://obsidian.md/plugins?id=llm-cost-tracker"
  },
  {
    id: "model-router",
    name: {
      en: "Model Router",
      ko: "Model Router"
    },
    summary: {
      en: "Model Router helps with publish workflows in Obsidian with clear, practical steps.",
      ko: "Model Router\uB294 Obsidian\uC5D0\uC11C publish \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for publish routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "publish \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "Requires setup and tuning time",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uCD08\uAE30 \uC124\uC815\uACFC \uD29C\uB2DD \uC2DC\uAC04\uC774 \uD544\uC694\uD568",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "publish",
      "advanced",
      "mobile",
      "community"
    ],
    category: "publish",
    difficulty: "advanced",
    beginnerFit: false,
    mobileSupport: true,
    recommendationScore: 86,
    pluginUrl: "https://obsidian.md/plugins?id=model-router"
  },
  {
    id: "prompt-guard",
    name: {
      en: "Prompt Guard",
      ko: "Prompt Guard"
    },
    summary: {
      en: "Prompt Guard helps with ai workflows in Obsidian with clear, practical steps.",
      ko: "Prompt Guard\uB294 Obsidian\uC5D0\uC11C ai \uC6CC\uD06C\uD50C\uB85C\uB97C \uB354 \uC27D\uAC8C \uB9CC\uB4DC\uB294 \uD50C\uB7EC\uADF8\uC778\uC785\uB2C8\uB2E4."
    },
    pros: {
      en: [
        "Well suited for ai routines",
        "Simple onboarding docs",
        "Works with common community setups"
      ],
      ko: [
        "ai \uB8E8\uD2F4\uC5D0 \uC798 \uB9DE\uC74C",
        "\uC785\uBB38 \uAC00\uC774\uB4DC\uAC00 \uBA85\uD655\uD568",
        "\uB2E4\uB978 \uCEE4\uBBA4\uB2C8\uD2F0 \uD50C\uB7EC\uADF8\uC778\uACFC \uC870\uD569\uC774 \uC88B\uC74C"
      ]
    },
    cons: {
      en: [
        "May feel limited for power users",
        "Some features depend on user workflow discipline"
      ],
      ko: [
        "\uACE0\uAE09 \uC0AC\uC6A9\uC790\uC5D0\uAC90 \uAE30\uB2A5\uC774 \uBD80\uC871\uD560 \uC218 \uC788\uC74C",
        "\uC0AC\uC6A9 \uC2B5\uAD00\uC5D0 \uB530\uB77C \uCCB4\uAC10 \uD6A8\uACFC \uCC28\uC774"
      ]
    },
    tags: [
      "ai",
      "beginner",
      "mobile",
      "community"
    ],
    category: "ai",
    difficulty: "beginner",
    beginnerFit: true,
    mobileSupport: true,
    recommendationScore: 95,
    pluginUrl: "https://obsidian.md/plugins?id=prompt-guard"
  }
];

// src/data.ts
var PLUGINS = plugins_default;
function getCategories() {
  return [...new Set(PLUGINS.map((p) => p.category))].sort((a, b) => a.localeCompare(b));
}

// src/llm.ts
async function enhanceTextWithLlm(settings, input) {
  if (!settings.useLlmEnhancement || settings.provider === "none") return input;
  try {
    if (settings.provider === "gemini") {
      return await callGemini(settings.geminiApiKey, settings.geminiModel, input, settings.requestTimeoutMs);
    }
    if (settings.provider === "cerebras") {
      return await callCerebras(settings.cerebrasApiKey, settings.cerebrasModel, input, settings.requestTimeoutMs);
    }
    return input;
  } catch (error) {
    throw new Error(error?.message ?? "LLM request failed.");
  }
}
async function withTimeout(url, init, timeoutMs) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), Math.max(3e3, timeoutMs || 15e3));
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms.`);
    }
    throw err;
  } finally {
    window.clearTimeout(timer);
  }
}
async function callGemini(apiKey, model, input, timeoutMs) {
  if (!apiKey) throw new Error("Gemini API key is missing.");
  const res = await withTimeout(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Improve clarity while keeping technical details:

${input}` }] }]
      })
    },
    timeoutMs
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error (${res.status}). ${truncate(err)}`);
  }
  const json = await res.json();
  return json?.candidates?.[0]?.content?.parts?.[0]?.text ?? input;
}
async function callCerebras(apiKey, model, input, timeoutMs) {
  if (!apiKey) throw new Error("Cerebras API key is missing.");
  const res = await withTimeout(
    "https://api.cerebras.ai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "You rewrite Obsidian plugin recommendations for clarity and brevity." },
          { role: "user", content: input }
        ],
        temperature: 0.2
      })
    },
    timeoutMs
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Cerebras API error (${res.status}). ${truncate(err)}`);
  }
  const json = await res.json();
  return json?.choices?.[0]?.message?.content ?? input;
}
function truncate(value, max = 180) {
  return value.length > max ? `${value.slice(0, max)}...` : value;
}

// src/recommender.ts
function recommend(profile) {
  const scored = PLUGINS.map((p) => {
    let score = p.recommendationScore;
    if (profile.preferredCategory !== "all" && p.category === profile.preferredCategory) score += 8;
    if (profile.preferredDifficulty !== "any" && p.difficulty === profile.preferredDifficulty) score += 6;
    if (profile.beginner && p.beginnerFit) score += 7;
    if (profile.preferMobile && p.mobileSupport) score += 6;
    if (profile.purpose === "research" && p.tags.includes("knowledge")) score += 6;
    if (profile.purpose === "writing" && p.tags.includes("writing")) score += 6;
    if (profile.purpose === "productivity" && p.tags.includes("task")) score += 6;
    return { plugin: p, score };
  }).sort((a, b) => b.score - a.score).slice(0, 20).map((x) => x.plugin);
  return scored;
}

// src/main.ts
var DEFAULT_SETTINGS = {
  language: "ko",
  provider: "none",
  geminiApiKey: "",
  geminiModel: "gemini-2.5-flash",
  cerebrasApiKey: "",
  cerebrasModel: "llama-3.3-70b",
  useLlmEnhancement: false,
  metadataSourceUrls: "https://obsidian.md/plugins",
  requestTimeoutMs: 15e3,
  maskSensitiveFields: true,
  weeklyReportFolder: "Plugin Compass"
};
var PluginCompassPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
  }
  async onload() {
    await this.loadSettings();
    this.addCommand({ id: "open-plugin-compass-modal", name: "Open Plugin Compass", callback: () => new CompassModal(this.app, this).open() });
    this.addCommand({ id: "run-weekly-metadata-update", name: "Run weekly metadata update scaffold", callback: async () => this.runWeeklyUpdate() });
    this.addRibbonIcon("compass", "Plugin Compass", () => new CompassModal(this.app, this).open());
    this.addSettingTab(new PluginCompassSettingTab(this.app, this));
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async runWeeklyUpdate() {
    const reportFolder = this.settings.weeklyReportFolder.trim() || "Plugin Compass";
    await this.app.vault.createFolder(reportFolder).catch(() => void 0);
    const urls = this.settings.metadataSourceUrls.split("\n").map((x) => x.trim()).filter(Boolean);
    const summary = [];
    for (const url of urls) {
      try {
        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), this.settings.requestTimeoutMs);
        const res = await fetch(url, { signal: controller.signal });
        window.clearTimeout(timer);
        summary.push(`- \u2705 ${url} (${res.status})`);
      } catch (error) {
        summary.push(`- \u26A0\uFE0F ${url} (fallback: ${error?.message ?? "network error"})`);
      }
    }
    const now = /* @__PURE__ */ new Date();
    const iso = now.toISOString().slice(0, 10);
    const md = `# Plugin Compass Weekly Update (${iso})

## Dataset
- Total plugins: ${PLUGINS.length}
- Categories: ${getCategories().join(", ")}

## Source check
${summary.join("\n") || "- (no URLs configured)"}

## Notes
- This is scaffolding mode: keeps recommendations available even when network fetch fails.
- Safe fallback used by default.
`;
    const filePath = `${reportFolder}/plugin-compass-weekly-${iso}.md`;
    await this.app.vault.adapter.write(filePath, md);
    return filePath;
  }
};
var CompassModal = class extends import_obsidian.Modal {
  constructor(app, plugin) {
    super(app);
    this.activeTab = "setup";
    this.selectedPlugin = null;
    this.profile = { purpose: "research", beginner: true, preferMobile: true, preferredDifficulty: "any", preferredCategory: "all" };
    this.filters = { search: "", category: "all", difficulty: "any", mobile: "all", sortBy: "score", sortOrder: "desc" };
    this.plugin = plugin;
  }
  onOpen() {
    this.render();
  }
  render() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("plugin-compass-root");
    contentEl.createEl("h2", { text: "Plugin Compass" });
    const tabs = contentEl.createDiv({ cls: "plugin-compass-tabs" });
    this.tabButton(tabs, "setup", this.t("Setup"));
    this.tabButton(tabs, "discover", this.t("Discover"));
    this.tabButton(tabs, "recommend", this.t("Recommend"));
    this.tabButton(tabs, "weekly", this.t("Weekly Update"));
    const body = contentEl.createDiv({ cls: "plugin-compass-body" });
    if (this.activeTab === "setup") this.renderSetup(body);
    if (this.activeTab === "discover") this.renderDiscover(body);
    if (this.activeTab === "recommend") this.renderRecommend(body);
    if (this.activeTab === "weekly") this.renderWeekly(body);
  }
  tabButton(parent, tab, label) {
    const btn = parent.createEl("button", { text: label, cls: tab === this.activeTab ? "is-active" : "" });
    btn.onclick = () => {
      this.activeTab = tab;
      this.render();
    };
  }
  renderSetup(el) {
    const intro = el.createDiv({ cls: "plugin-compass-card" });
    intro.createEl("h3", { text: this.t("What Plugin Compass does") });
    intro.createEl("p", { text: this.t("It helps you discover Obsidian plugins with clear pros/cons, then generates a setup plan in Korean or English.") });
    intro.createEl("p", { text: this.t("Flow: Setup \u2192 Discover \u2192 Recommend \u2192 Export plan / Weekly update.") });
    new import_obsidian.Setting(el).setName(this.t("Language")).addDropdown(
      (d) => d.addOption("ko", "\uD55C\uAD6D\uC5B4").addOption("en", "English").setValue(this.plugin.settings.language).onChange(async (v) => {
        this.plugin.settings.language = v;
        await this.plugin.saveSettings();
        this.render();
      })
    );
    new import_obsidian.Setting(el).setName(this.t("LLM Provider")).addDropdown(
      (d) => d.addOption("none", "None").addOption("gemini", "Gemini").addOption("cerebras", "Cerebras").setValue(this.plugin.settings.provider).onChange(async (v) => {
        this.plugin.settings.provider = v;
        await this.plugin.saveSettings();
        this.render();
      })
    );
    new import_obsidian.Setting(el).setName(this.t("Use LLM enhancement")).addToggle((t) => t.setValue(this.plugin.settings.useLlmEnhancement).onChange(async (v) => {
      this.plugin.settings.useLlmEnhancement = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(el).setName(this.t("Request timeout (ms)")).addText((t) => t.setValue(String(this.plugin.settings.requestTimeoutMs)).onChange(async (v) => {
      const parsed = Number(v);
      if (!Number.isNaN(parsed) && parsed >= 3e3) {
        this.plugin.settings.requestTimeoutMs = parsed;
        await this.plugin.saveSettings();
      }
    }));
    if (this.plugin.settings.provider === "gemini") {
      this.secureTextSetting(el, "Gemini API Key", this.plugin.settings.geminiApiKey, async (v) => {
        this.plugin.settings.geminiApiKey = v;
      });
      new import_obsidian.Setting(el).setName("Gemini Model").addText((t) => t.setValue(this.plugin.settings.geminiModel).onChange(async (v) => {
        this.plugin.settings.geminiModel = v.trim();
        await this.plugin.saveSettings();
      }));
    }
    if (this.plugin.settings.provider === "cerebras") {
      this.secureTextSetting(el, "Cerebras API Key", this.plugin.settings.cerebrasApiKey, async (v) => {
        this.plugin.settings.cerebrasApiKey = v;
      });
      new import_obsidian.Setting(el).setName("Cerebras Model").addText((t) => t.setValue(this.plugin.settings.cerebrasModel).onChange(async (v) => {
        this.plugin.settings.cerebrasModel = v.trim();
        await this.plugin.saveSettings();
      }));
    }
    el.createEl("p", { cls: "plugin-compass-warning", text: this.t("Never share vault files containing plaintext keys.") });
  }
  secureTextSetting(el, name, value, assign) {
    new import_obsidian.Setting(el).setName(name).setDesc(this.t("Stored in local plugin settings.")).addText((t) => {
      t.setValue(value);
      t.inputEl.type = this.plugin.settings.maskSensitiveFields ? "password" : "text";
      t.onChange(async (v) => {
        await assign(v.trim());
        await this.plugin.saveSettings();
      });
    }).addExtraButton(
      (b) => b.setIcon(this.plugin.settings.maskSensitiveFields ? "eye-off" : "eye").setTooltip(this.t("Toggle mask")).onClick(async () => {
        this.plugin.settings.maskSensitiveFields = !this.plugin.settings.maskSensitiveFields;
        await this.plugin.saveSettings();
        this.render();
      })
    );
  }
  renderDiscover(el) {
    el.createEl("p", { text: this.t("Tip: click a plugin row to see details and install actions below.") });
    const controls = el.createDiv({ cls: "plugin-compass-controls" });
    const categories = getCategories();
    new import_obsidian.Setting(controls).setName(this.t("Search")).addText((t) => t.setPlaceholder("dataview, task...").onChange((v) => {
      this.filters.search = v.toLowerCase();
      this.render();
    }));
    new import_obsidian.Setting(controls).setName(this.t("Category")).addDropdown((d) => {
      d.addOption("all", "All");
      categories.forEach((c) => d.addOption(c, c));
      d.setValue(this.filters.category).onChange((v) => {
        this.filters.category = v;
        this.render();
      });
    });
    new import_obsidian.Setting(controls).setName(this.t("Difficulty")).addDropdown((d) => d.addOption("any", "Any").addOption("beginner", "Beginner").addOption("intermediate", "Intermediate").addOption("advanced", "Advanced").setValue(this.filters.difficulty).onChange((v) => {
      this.filters.difficulty = v;
      this.render();
    }));
    new import_obsidian.Setting(controls).setName(this.t("Mobile support")).addDropdown((d) => d.addOption("all", "All").addOption("yes", "Yes").addOption("no", "No").setValue(this.filters.mobile).onChange((v) => {
      this.filters.mobile = v;
      this.render();
    }));
    new import_obsidian.Setting(controls).setName(this.t("Sort")).addDropdown((d) => d.addOption("score", "Score").addOption("name", "Name").addOption("difficulty", "Difficulty").setValue(this.filters.sortBy).onChange((v) => {
      this.filters.sortBy = v;
      this.render();
    })).addDropdown((d) => d.addOption("desc", "Desc").addOption("asc", "Asc").setValue(this.filters.sortOrder).onChange((v) => {
      this.filters.sortOrder = v;
      this.render();
    }));
    const list = this.filteredPlugins();
    el.createEl("p", { text: `${list.length} plugins` });
    const table = el.createEl("table", { cls: "plugin-compass-table" });
    const head = table.createEl("thead").createEl("tr");
    ["Name", "Category", "Difficulty", "Mobile", "Score"].forEach((x) => head.createEl("th", { text: x }));
    const body = table.createEl("tbody");
    list.slice(0, 60).forEach((p) => {
      const row = body.createEl("tr");
      row.onclick = () => {
        this.selectedPlugin = p;
        this.render();
      };
      row.createEl("td", { text: p.name[this.plugin.settings.language] });
      row.createEl("td", { text: p.category });
      row.createEl("td", { text: p.difficulty });
      row.createEl("td", { text: p.mobileSupport ? "Yes" : "No" });
      row.createEl("td", { text: String(p.recommendationScore) });
    });
    if (this.selectedPlugin) this.renderPluginCard(el, this.selectedPlugin);
  }
  renderPluginCard(el, p) {
    const card = el.createDiv({ cls: "plugin-compass-card" });
    card.createEl("h3", { text: p.name[this.plugin.settings.language] });
    card.createEl("p", { text: p.summary[this.plugin.settings.language] });
    card.createEl("p", { text: `${this.t("Pros")}: ${p.pros[this.plugin.settings.language].join(", ")}` });
    card.createEl("p", { text: `${this.t("Cons")}: ${p.cons[this.plugin.settings.language].join(", ")}` });
    card.createEl("p", { text: `Tags: ${p.tags.join(", ")}` });
    card.createEl("p", { cls: "plugin-compass-warning", text: this.t("Obsidian security policy may require manual enable after opening installer.") });
    new import_obsidian.Setting(card).setName(this.t("Plugin URL")).setDesc(p.pluginUrl).addButton((b) => b.setButtonText(this.t("Copy ID link")).onClick(async () => {
      await navigator.clipboard.writeText(p.pluginUrl);
      new import_obsidian.Notice(this.t("Copied"));
    }));
    const installUri = `obsidian://show-plugin?id=${p.id}`;
    new import_obsidian.Setting(card).setName(this.t("Install command")).setDesc(installUri).addButton((b) => b.setButtonText(this.t("Open installer")).setCta().onClick(() => {
      window.open(installUri, "_blank");
    })).addButton((b) => b.setButtonText(this.t("Copy command")).onClick(async () => {
      await navigator.clipboard.writeText(installUri);
      new import_obsidian.Notice(this.t("Copied"));
    }));
  }
  renderRecommend(el) {
    const categories = getCategories();
    new import_obsidian.Setting(el).setName(this.t("Purpose")).addDropdown((d) => d.addOption("research", this.t("Research")).addOption("writing", this.t("Writing")).addOption("productivity", this.t("Productivity")).setValue(this.profile.purpose).onChange((v) => this.profile.purpose = v));
    new import_obsidian.Setting(el).setName(this.t("Beginner mode")).addToggle((t) => t.setValue(this.profile.beginner).onChange((v) => this.profile.beginner = v));
    new import_obsidian.Setting(el).setName(this.t("Prefer mobile")).addToggle((t) => t.setValue(this.profile.preferMobile).onChange((v) => this.profile.preferMobile = v));
    new import_obsidian.Setting(el).setName(this.t("Preferred category")).addDropdown((d) => {
      d.addOption("all", "All");
      categories.forEach((c) => d.addOption(c, c));
      d.setValue(this.profile.preferredCategory).onChange((v) => this.profile.preferredCategory = v);
    });
    new import_obsidian.Setting(el).setName(this.t("Preferred difficulty")).addDropdown((d) => d.addOption("any", "Any").addOption("beginner", "Beginner").addOption("intermediate", "Intermediate").addOption("advanced", "Advanced").setValue(this.profile.preferredDifficulty).onChange((v) => this.profile.preferredDifficulty = v));
    const out = el.createDiv();
    new import_obsidian.Setting(el).addButton((b) => b.setButtonText(this.t("Run recommendation")).setCta().onClick(async () => {
      out.empty();
      const rec = recommend(this.profile);
      let plan = `# Plugin Compass Setup Plan

`;
      for (const item of rec.slice(0, 10)) {
        const div = out.createDiv({ cls: "plugin-compass-card" });
        div.createEl("h4", { text: item.name[this.plugin.settings.language] });
        div.createEl("p", { text: item.summary[this.plugin.settings.language] });
        plan += `## ${item.name.en}
- ID: ${item.id}
- Link: ${item.pluginUrl}
- Why: ${item.summary.en}

`;
      }
      if (this.plugin.settings.useLlmEnhancement && this.plugin.settings.provider !== "none") {
        try {
          const improved = await enhanceTextWithLlm(this.plugin.settings, plan);
          out.createEl("pre", { text: improved });
          plan = improved;
        } catch (error) {
          new import_obsidian.Notice(error?.message ?? "LLM request failed");
        }
      }
      new import_obsidian.Setting(out).addButton((b2) => b2.setButtonText(this.t("Export setup plan markdown")).onClick(async () => {
        const dir = this.plugin.settings.weeklyReportFolder.trim() || "Plugin Compass";
        await this.app.vault.createFolder(dir).catch(() => void 0);
        const path = `${dir}/plugin-compass-setup-plan-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.md`;
        await this.app.vault.adapter.write(path, plan);
        new import_obsidian.Notice(`${this.t("Saved")}: ${path}`);
      }));
    }));
  }
  renderWeekly(el) {
    new import_obsidian.Setting(el).setName(this.t("Metadata source URLs")).setDesc("One URL per line").addTextArea((t) => t.setValue(this.plugin.settings.metadataSourceUrls).onChange(async (v) => {
      this.plugin.settings.metadataSourceUrls = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(el).setName(this.t("Weekly report folder")).addText((t) => t.setValue(this.plugin.settings.weeklyReportFolder).onChange(async (v) => {
      this.plugin.settings.weeklyReportFolder = v.trim() || "Plugin Compass";
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(el).addButton((b) => b.setButtonText(this.t("Run update now")).setCta().onClick(async () => {
      try {
        const file = await this.plugin.runWeeklyUpdate();
        new import_obsidian.Notice(`${this.t("Saved")}: ${file}`);
      } catch (error) {
        new import_obsidian.Notice(error?.message ?? "Failed to run weekly update");
      }
    }));
  }
  filteredPlugins() {
    const list = PLUGINS.filter((p) => {
      if (this.filters.search) {
        const hay = `${p.id} ${p.name.en} ${p.name.ko} ${p.summary.en} ${p.summary.ko}`.toLowerCase();
        if (!hay.includes(this.filters.search)) return false;
      }
      if (this.filters.category !== "all" && p.category !== this.filters.category) return false;
      if (this.filters.difficulty !== "any" && p.difficulty !== this.filters.difficulty) return false;
      if (this.filters.mobile === "yes" && !p.mobileSupport) return false;
      if (this.filters.mobile === "no" && p.mobileSupport) return false;
      return true;
    });
    list.sort((a, b) => {
      let compare = 0;
      if (this.filters.sortBy === "score") compare = a.recommendationScore - b.recommendationScore;
      if (this.filters.sortBy === "name") compare = a.name.en.localeCompare(b.name.en);
      if (this.filters.sortBy === "difficulty") compare = a.difficulty.localeCompare(b.difficulty);
      return this.filters.sortOrder === "asc" ? compare : -compare;
    });
    return list;
  }
  t(input) {
    if (this.plugin.settings.language === "en") return input;
    const ko = {
      Setup: "\uC124\uC815",
      Discover: "\uD0D0\uC0C9",
      Recommend: "\uCD94\uCC9C",
      "Weekly Update": "\uC8FC\uAC04 \uC5C5\uB370\uC774\uD2B8",
      "What Plugin Compass does": "Plugin Compass\uAC00 \uD558\uB294 \uC77C",
      "It helps you discover Obsidian plugins with clear pros/cons, then generates a setup plan in Korean or English.": "Obsidian \uD50C\uB7EC\uADF8\uC778\uC744 \uC7A5\uB2E8\uC810 \uC911\uC2EC\uC73C\uB85C \uC27D\uAC8C \uD0D0\uC0C9\uD558\uACE0, \uD55C\uAD6D\uC5B4/\uC601\uC5B4 \uC124\uCE58 \uD50C\uB79C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.",
      "Flow: Setup \u2192 Discover \u2192 Recommend \u2192 Export plan / Weekly update.": "\uD750\uB984: \uC124\uC815 \u2192 \uD0D0\uC0C9 \u2192 \uCD94\uCC9C \u2192 \uC124\uCE58 \uD50C\uB79C \uB0B4\uBCF4\uB0B4\uAE30 / \uC8FC\uAC04 \uC5C5\uB370\uC774\uD2B8",
      Language: "\uC5B8\uC5B4",
      "LLM Provider": "LLM \uC81C\uACF5\uC790",
      "Use LLM enhancement": "LLM \uAC1C\uC120 \uC0AC\uC6A9",
      "Request timeout (ms)": "\uC694\uCCAD \uD0C0\uC784\uC544\uC6C3(ms)",
      "Never share vault files containing plaintext keys.": "API \uD0A4\uAC00 \uD3EC\uD568\uB41C \uD3C9\uBB38 \uC124\uC815 \uD30C\uC77C\uC744 \uACF5\uC720\uD558\uC9C0 \uB9C8\uC138\uC694.",
      Search: "\uAC80\uC0C9",
      Category: "\uCE74\uD14C\uACE0\uB9AC",
      Difficulty: "\uB09C\uC774\uB3C4",
      "Mobile support": "\uBAA8\uBC14\uC77C \uC9C0\uC6D0",
      Sort: "\uC815\uB82C",
      Pros: "\uC7A5\uC810",
      Cons: "\uB2E8\uC810",
      "Plugin URL": "\uD50C\uB7EC\uADF8\uC778 URL",
      "Copy ID link": "ID \uB9C1\uD06C \uBCF5\uC0AC",
      "Install command": "\uC124\uCE58 \uBA85\uB839",
      "Open installer": "\uC124\uCE58\uCC3D \uC5F4\uAE30",
      "Copy command": "\uBA85\uB839 \uBCF5\uC0AC",
      Copied: "\uBCF5\uC0AC \uC644\uB8CC",
      Purpose: "\uBAA9\uC801",
      Research: "\uB9AC\uC11C\uCE58",
      Writing: "\uAE00\uC4F0\uAE30",
      Productivity: "\uC0DD\uC0B0\uC131",
      "Beginner mode": "\uCD08\uBCF4 \uBAA8\uB4DC",
      "Prefer mobile": "\uBAA8\uBC14\uC77C \uC120\uD638",
      "Preferred category": "\uC120\uD638 \uCE74\uD14C\uACE0\uB9AC",
      "Preferred difficulty": "\uC120\uD638 \uB09C\uC774\uB3C4",
      "Run recommendation": "\uCD94\uCC9C \uC2E4\uD589",
      "Export setup plan markdown": "\uC124\uCE58 \uD50C\uB79C \uB9C8\uD06C\uB2E4\uC6B4 \uB0B4\uBCF4\uB0B4\uAE30",
      Saved: "\uC800\uC7A5\uB428",
      "Metadata source URLs": "\uBA54\uD0C0\uB370\uC774\uD130 \uC18C\uC2A4 URL",
      "Weekly report folder": "\uC8FC\uAC04 \uB9AC\uD3EC\uD2B8 \uD3F4\uB354",
      "Run update now": "\uC9C0\uAE08 \uC5C5\uB370\uC774\uD2B8 \uC2E4\uD589",
      "Toggle mask": "\uB9C8\uC2A4\uD0B9 \uC804\uD658",
      "Stored in local plugin settings.": "\uB85C\uCEEC \uD50C\uB7EC\uADF8\uC778 \uC124\uC815\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.",
      "Obsidian security policy may require manual enable after opening installer.": "Obsidian \uBCF4\uC548 \uC815\uCC45\uC0C1 \uC124\uCE58\uCC3D\uC744 \uC5F4\uC5B4\uB3C4 \uC218\uB3D9 \uD65C\uC131\uD654\uAC00 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
      "Tip: click a plugin row to see details and install actions below.": "\uD301: \uD50C\uB7EC\uADF8\uC778 \uD589\uC744 \uD074\uB9AD\uD558\uBA74 \uC544\uB798\uC5D0 \uC0C1\uC138\uC815\uBCF4\uC640 \uC124\uCE58 \uB3D9\uC791\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4."
    };
    return ko[input] ?? input;
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
    new import_obsidian.Setting(containerEl).setName("Open modal").setDesc("Use the modal tabs for setup, discovery, recommendation, and weekly update.").addButton((b) => b.setButtonText("Open").onClick(() => new CompassModal(this.app, this.plugin).open()));
  }
};
//# sourceMappingURL=main.js.map
