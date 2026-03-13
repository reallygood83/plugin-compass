import type { PluginCompassSettings } from './types';

export async function enhanceTextWithLlm(settings: PluginCompassSettings, input: string): Promise<string> {
  if (!settings.useLlmEnhancement || settings.provider === 'none') return input;

  try {
    if (settings.provider === 'gemini') {
      return await callGemini(settings.geminiApiKey, settings.geminiModel, input, settings.requestTimeoutMs);
    }

    if (settings.provider === 'cerebras') {
      return await callCerebras(settings.cerebrasApiKey, settings.cerebrasModel, input, settings.requestTimeoutMs);
    }

    return input;
  } catch (error: any) {
    throw new Error(error?.message ?? 'LLM request failed.');
  }
}

async function withTimeout(url: string, init: RequestInit, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), Math.max(3000, timeoutMs || 15000));

  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeoutMs}ms.`);
    }
    throw err;
  } finally {
    window.clearTimeout(timer);
  }
}

async function callGemini(apiKey: string, model: string, input: string, timeoutMs: number): Promise<string> {
  if (!apiKey) throw new Error('Gemini API key is missing.');

  const res = await withTimeout(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Improve clarity while keeping technical details:\n\n${input}` }] }]
      })
    },
    timeoutMs
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error (${res.status}). ${truncate(err)}`);
  }

  const json: any = await res.json();
  return json?.candidates?.[0]?.content?.parts?.[0]?.text ?? input;
}

async function callCerebras(apiKey: string, model: string, input: string, timeoutMs: number): Promise<string> {
  if (!apiKey) throw new Error('Cerebras API key is missing.');

  const res = await withTimeout(
    'https://api.cerebras.ai/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: 'You rewrite Obsidian plugin recommendations for clarity and brevity.' },
          { role: 'user', content: input }
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

  const json: any = await res.json();
  return json?.choices?.[0]?.message?.content ?? input;
}

function truncate(value: string, max = 180): string {
  return value.length > max ? `${value.slice(0, max)}...` : value;
}
