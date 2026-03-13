import type { PluginCompassSettings } from './types';

export async function enhanceTextWithLlm(
  settings: PluginCompassSettings,
  input: string
): Promise<string> {
  if (!settings.useLlmEnhancement || settings.provider === 'none') return input;

  if (settings.provider === 'gemini') {
    return callGemini(settings.geminiApiKey, settings.geminiModel, input);
  }

  if (settings.provider === 'cerebras') {
    return callCerebras(settings.cerebrasApiKey, settings.cerebrasModel, input);
  }

  return input;
}

async function callGemini(apiKey: string, model: string, input: string): Promise<string> {
  if (!apiKey) throw new Error('Gemini API key is missing.');
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Improve clarity, keep concise:\n\n${input}` }] }]
      })
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error: ${res.status} ${err}`);
  }
  const json: any = await res.json();
  return json?.candidates?.[0]?.content?.parts?.[0]?.text ?? input;
}

async function callCerebras(apiKey: string, model: string, input: string): Promise<string> {
  if (!apiKey) throw new Error('Cerebras API key is missing.');
  const res = await fetch('https://api.cerebras.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: 'You rewrite text for clarity and brevity.' },
        { role: 'user', content: input }
      ],
      temperature: 0.2
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Cerebras API error: ${res.status} ${err}`);
  }
  const json: any = await res.json();
  return json?.choices?.[0]?.message?.content ?? input;
}
