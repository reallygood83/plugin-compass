export type Language = 'ko' | 'en';
export type LlmProvider = 'none' | 'gemini' | 'cerebras';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Purpose = 'research' | 'writing' | 'productivity';
export type CompassTab = 'setup' | 'discover' | 'recommend' | 'weekly';

export interface PluginCompassSettings {
  language: Language;
  provider: LlmProvider;
  geminiApiKey: string;
  geminiModel: string;
  cerebrasApiKey: string;
  cerebrasModel: string;
  useLlmEnhancement: boolean;
  metadataSourceUrls: string;
  requestTimeoutMs: number;
  maskSensitiveFields: boolean;
  weeklyReportFolder: string;
}

export interface PluginRecord {
  id: string;
  name: { ko: string; en: string };
  summary: { ko: string; en: string };
  pros: { ko: string[]; en: string[] };
  cons: { ko: string[]; en: string[] };
  tags: string[];
  category: string;
  difficulty: Difficulty;
  beginnerFit: boolean;
  mobileSupport: boolean;
  recommendationScore: number;
  pluginUrl: string;
}

export interface UserProfile {
  purpose: Purpose;
  beginner: boolean;
  preferMobile: boolean;
  preferredDifficulty: Difficulty | 'any';
  preferredCategory: string | 'all';
}

export interface DiscoverFilters {
  search: string;
  category: string | 'all';
  difficulty: Difficulty | 'any';
  mobile: 'all' | 'yes' | 'no';
  sortBy: 'score' | 'name' | 'difficulty';
  sortOrder: 'asc' | 'desc';
}
