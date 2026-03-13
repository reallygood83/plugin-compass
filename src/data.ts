import type { PluginRecord } from './types';

export const PLUGINS: PluginRecord[] = [
  {
    id: 'dataview',
    name: { ko: 'Dataview', en: 'Dataview' },
    summary: { ko: '노트 메타데이터 쿼리로 동적 목록 생성', en: 'Dynamic note metadata queries' },
    pros: { ko: ['대규모 노트 정리 강력', '자동 대시보드 구성'], en: ['Great for large vaults', 'Builds auto dashboards'] },
    cons: { ko: ['문법 학습 필요'], en: ['Needs query learning'] },
    fit: { research: 5, writing: 3, productivity: 4, beginner: 2 }
  },
  {
    id: 'templater',
    name: { ko: 'Templater', en: 'Templater' },
    summary: { ko: '반복 노트 자동 생성', en: 'Template-based note automation' },
    pros: { ko: ['반복 작업 시간 절감', '일관된 포맷 유지'], en: ['Saves repetitive work', 'Keeps structure consistent'] },
    cons: { ko: ['고급 기능은 복잡'], en: ['Advanced mode can be complex'] },
    fit: { research: 4, writing: 5, productivity: 4, beginner: 3 }
  },
  {
    id: 'tasks',
    name: { ko: 'Tasks', en: 'Tasks' },
    summary: { ko: '체크리스트를 작업시스템으로 확장', en: 'Turns checklists into a task system' },
    pros: { ko: ['상태/마감일 관리', 'Dataview와 궁합'], en: ['Status & due-date control', 'Works well with Dataview'] },
    cons: { ko: ['설정이 많아지면 복잡'], en: ['Can become complex with many rules'] },
    fit: { research: 3, writing: 2, productivity: 5, beginner: 4 }
  },
  {
    id: 'omnisearch',
    name: { ko: 'Omnisearch', en: 'Omnisearch' },
    summary: { ko: '검색 품질 향상', en: 'Enhanced search quality' },
    pros: { ko: ['재발견에 좋음', '빠른 탐색'], en: ['Great rediscovery', 'Fast discovery'] },
    cons: { ko: ['초기 인덱싱 필요'], en: ['Initial indexing time'] },
    fit: { research: 4, writing: 3, productivity: 4, beginner: 5 }
  },
  {
    id: 'quickadd',
    name: { ko: 'QuickAdd', en: 'QuickAdd' },
    summary: { ko: '빠른 캡처/커맨드 자동화', en: 'Fast capture and command automation' },
    pros: { ko: ['입력속도 향상', '자동화 확장성'], en: ['Faster capture', 'Flexible automation'] },
    cons: { ko: ['초기 이해 필요'], en: ['Requires initial setup learning'] },
    fit: { research: 4, writing: 4, productivity: 5, beginner: 2 }
  }
];
