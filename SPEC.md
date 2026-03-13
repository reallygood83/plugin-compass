# Plugin Compass Spec (v0.1)

## 1. Product Goal
Plugin Compass helps users choose the right Obsidian community plugins via a **modal-first wizard**.
It provides easy-to-understand:
- Pros / Cons
- Recommendation level
- KO/EN output

## 2. UX Principle
- Most actions should be possible inside one modal.
- Settings, profile input, and recommendation output are all accessible in the modal.
- Settings tab remains minimal (just opens modal).

## 3. Core Features
1) Modal-first recommendation wizard
2) KO/EN language toggle
3) Plugin cards with pros/cons
4) LLM enhancement option for summary rewrite
5) LLM provider selection: `Gemini` / `Cerebras`

## 4. LLM Integration (as of 2026-03-13 docs check)
### Gemini
- Endpoint: `POST https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key=...`
- Default model: `gemini-2.5-flash` (editable)
- Docs:
  - https://ai.google.dev/gemini-api/docs/libraries
  - https://ai.google.dev/api/generate-content

### Cerebras
- Endpoint: `POST https://api.cerebras.ai/v1/chat/completions` (OpenAI-compatible)
- Default model: `llama-3.3-70b` (editable)
- Docs:
  - https://inference-docs.cerebras.ai/resources/openai

## 5. Security Notes
- API keys are stored in plugin settings data (local Obsidian vault context).
- Users should avoid sharing vault/plugin data with plaintext keys.
- Future: add optional key masking and external key manager support.

## 6. Recommendation Engine (v0.1)
- Rule-based scoring from profile fields:
  - purpose: research / writing / productivity
  - beginner mode: true/false
- Top-5 plugins returned from local sample dataset.

## 7. Data Layer Roadmap
- v0.1: embedded sample DB (5 plugins)
- v0.2: JSON dataset expansion (150+)
- v0.3: weekly auto-update pipeline (index + maintenance signals)

## 8. Weekly Automation Plan (next milestone)
- Weekly job script to refresh plugin metadata
- Recompute recommendation scores
- Generate weekly markdown report in vault

## 9. File Structure
- `src/main.ts` modal UX + plugin bootstrap
- `src/data.ts` sample plugin dataset
- `src/recommender.ts` rule-based recommendation logic
- `src/llm.ts` Gemini/Cerebras API clients
- `manifest.json`, `styles.css`

## 10. Known Constraints
- No full automatic community-plugin install in v0.1
- LLM usage optional, disabled by default
- API model names are user-editable to avoid provider-side model lifecycle breakage
