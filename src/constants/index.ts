import { SajuRowHeader } from "@/types/saju";

// 페이지 사주 테이블에서 사용할 row 헤더
export const SAJU_ROW_HEADERS: SajuRowHeader[] = [
  { label: '十星', subLabel: '십성', target: 'Sky', field: 'tenStar' },
  { label: '天干', subLabel: '천간', target: 'Sky', field: 'chinese' },
  { label: '地支', subLabel: '지지', target: 'Ground', field: 'chinese' },
  { label: '十星', subLabel: '십성', target: 'Ground', field: 'tenStar' },
  { label: '十二運星', subLabel: '십이운성', target: 'Ground', field: 'unsung' },
  { label: '神殺', subLabel: '신살', target: 'Ground', field: 'sinsal' },
  { label: '貴人', subLabel: '귀인', target: 'Ground', field: 'etcSinsal' },
];