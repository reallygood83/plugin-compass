import { PLUGINS } from './data';
import type { PluginRecord, UserProfile } from './types';

export function recommend(profile: UserProfile): PluginRecord[] {
  const scored = PLUGINS.map((p) => {
    let score = p.recommendationScore;

    if (profile.preferredCategory !== 'all' && p.category === profile.preferredCategory) score += 8;
    if (profile.preferredDifficulty !== 'any' && p.difficulty === profile.preferredDifficulty) score += 6;
    if (profile.beginner && p.beginnerFit) score += 7;
    if (profile.preferMobile && p.mobileSupport) score += 6;

    if (profile.purpose === 'research' && p.tags.includes('knowledge')) score += 6;
    if (profile.purpose === 'writing' && p.tags.includes('writing')) score += 6;
    if (profile.purpose === 'productivity' && p.tags.includes('task')) score += 6;

    return { plugin: p, score };
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((x) => x.plugin);

  return scored;
}
