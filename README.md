# Plugin Compass

Modal-first Obsidian plugin recommendation wizard.

## Features
- Modal-based setup and recommendation flow
- KO/EN language switch
- Easy plugin cards (summary, pros, cons)
- Optional LLM rewrite using Gemini or Cerebras

## Quick Start
```bash
npm install
npm run build
```

Then copy these files into your vault plugin folder:
- `main.js`
- `manifest.json`
- `styles.css`

Path example:
`<vault>/.obsidian/plugins/plugin-compass/`

## Development
```bash
npm run dev
npm run check
```

## Default LLM settings
- Gemini model: `gemini-2.5-flash`
- Cerebras model: `llama-3.3-70b`

Both are editable in modal settings.

## Docs references used
- Gemini: https://ai.google.dev/gemini-api/docs/libraries
- Gemini generateContent: https://ai.google.dev/api/generate-content
- Cerebras OpenAI-compatible API: https://inference-docs.cerebras.ai/resources/openai

## License
MIT
