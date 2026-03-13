export type Language = 'ko' | 'en';
export type LlmProvider = 'none' | 'gemini' | 'cerebras';

export interface PluginCompassSettings {
  language: Language;
  provider: LlmProvider;
  geminiApiKey: string;
  geminiModel: string;
  cerebrasApiKey: string;
  cerebrasModel: string;
  useLlmEnhancement: boolean;
}

export interface PluginRecord {
  id: string;
  name: { ko: string; en: string };
  summary: { ko: string; en: string };
  pros: { ko: string[]; en: string[] };
  cons: { ko: string[]; en: string[] };
  fit: {
    research: number;
    writing: number;
    productivity: number;
    beginner: number;
  };
}

export interface UserProfile {
  purpose: 'research' | 'writing' | 'productivity';
  beginner: boolean;
}
