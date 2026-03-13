import rawPlugins from './plugins.json';
import type { PluginRecord } from './types';

export const PLUGINS: PluginRecord[] = rawPlugins as PluginRecord[];

export function getCategories(): string[] {
  return [...new Set(PLUGINS.map((p) => p.category))].sort((a, b) => a.localeCompare(b));
}
