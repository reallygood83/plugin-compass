# Plugin Compass Spec (v0.9)

## 1) Product Goal
Deliver a near-production Obsidian plugin recommendation assistant with bilingual UX and actionable setup guidance.

## 2) Scope Delivered
### Data Layer
- `src/plugins.json` expanded to **160 curated entries**.
- Metadata includes:
  - `summary.ko/en`
  - `pros.ko/en`, `cons.ko/en`
  - `tags`, `category`, `difficulty`
  - `beginnerFit`, `mobileSupport`, `recommendationScore`
  - `pluginUrl`

### Modal UX
Tabbed modal with 4 tabs:
1. **Setup**
2. **Discover**
3. **Recommend**
4. **Weekly Update**

Discover includes search, filters (category/difficulty/mobile), sortable list/table behavior, and detailed plugin card.

### Installation Helper UX
- One-click copy plugin ID links
- One-click copy install command snippets (`obsidian://show-plugin?id=...`)
- Exportable setup-plan markdown note in vault

### Weekly Update Scaffolding
- Command: `Run weekly metadata update scaffold`
- Reads configured source URLs
- Attempts fetch checks with timeout
- Generates weekly report markdown
- Safe fallback when network requests fail

### Settings Security + Reliability
- Masked API key fields (toggle)
- Warning copy around plaintext key safety
- Gemini/Cerebras model names remain configurable
- Timeout-controlled LLM requests + robust errors

## 3) Architecture
- `src/main.ts`: plugin bootstrap, commands, modal tabs, weekly update workflow
- `src/types.ts`: expanded typed models
- `src/data.ts`: plugin data loading and category helpers
- `src/recommender.ts`: profile-aware recommendation scoring
- `src/llm.ts`: provider calls with timeout/error wrappers

## 4) Non-Goals (for this milestone)
- Full official plugin registry sync parser
- Background scheduler daemon
- Auto-install without user interaction

## 5) Quality Gates
- Type check: `npm run check`
- Build: `npm run build`

## 6) Future Work
- Real registry parser + delta updates
- Recommendation explainability panel
- Preset packs by persona (writer/researcher/student)
