import { PLUGINS } from './data';
import type { PluginRecord, UserProfile } from './types';

export function recommend(profile: UserProfile): PluginRecord[] {
  const scored = PLUGINS.map((p) => {
    const domain = p.fit[profile.purpose];
    const beginnerBonus = profile.beginner ? p.fit.beginner : 3;
    const score = domain * 0.75 + beginnerBonus * 0.25;
    return { p, score };
  }).sort((a, b) => b.score - a.score);

  return scored.slice(0, 5).map((x) => x.p);
}

export function scoreLabel(score: number, lang: 'ko' | 'en'): string {
  if (lang === 'ko') {
    if (score >= 4.5) return '강력 추천';
    if (score >= 3.8) return '추천';
    if (score >= 3) return '상황별 추천';
    return '보류';
  }
  if (score >= 4.5) return 'Strongly Recommended';
  if (score >= 3.8) return 'Recommended';
  if (score >= 3) return 'Conditional';
  return 'Hold';
}
