# Plugin Compass

Plugin Compass is a near-production Obsidian plugin for discovering, filtering, and planning community plugin setups with bilingual Korean/English guidance.

## Highlights
- 160-entry curated dataset (`src/plugins.json`) with:
  - KO/EN summaries
  - pros/cons
  - tags, category, difficulty
  - beginner-fit, mobile support, recommendation score
- Tabbed modal UX:
  - **Setup**: language, LLM provider, secure key masking, timeouts
  - **Discover**: search, filters, sortable list, detailed plugin card
  - **Recommend**: profile-based top picks + exportable setup plan markdown
  - **Weekly Update**: metadata source URL checks + weekly report generation with fallback
- Installation helper UX:
  - one-click copy plugin ID links
  - one-click copy install command snippets
  - markdown setup-plan export into your vault
- LLM enhancement options:
  - Gemini + Cerebras support
  - configurable model names
  - request timeout + robust error handling

## Install (development)
```bash
npm install
npm run check
npm run build
```

Then copy into your vault plugin folder:
- `main.js`
- `manifest.json`
- `styles.css`

Path example:
`<vault>/.obsidian/plugins/plugin-compass/`

## Usage
1. Run command: **Open Plugin Compass**
2. In **Setup**, configure language and optional LLM provider/model/API key.
3. In **Discover**, search/filter/sort and inspect plugin cards.
4. In **Recommend**, run profile-based recommendations and export a setup plan markdown.
5. In **Weekly Update**, configure source URLs and run scaffold update to generate weekly report notes.

## Weekly automation scaffold
Command: **Run weekly metadata update scaffold**
- Checks configured source URLs (safe, best-effort)
- Generates weekly report markdown in configured folder
- Falls back gracefully when network requests fail

## Security UX
- API fields are maskable in UI (toggle eye icon)
- Warning shown for plaintext key handling
- Keys remain local in Obsidian plugin settings context

## Docs
- SPEC: `SPEC.md`
- Changelog: `CHANGELOG.md`
- Release checklist: `RELEASE_CHECKLIST.md`
- Screenshot placeholders: `docs/screenshots/`

## License
MIT
