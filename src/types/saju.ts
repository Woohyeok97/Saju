// 사주 테이블 Row 헤더
export interface SajuRowHeader{
  label: string;
  subLabel: string;
  target: 'Sky' | 'Ground';
  field: 'tenStar' | 'chinese' | 'unsung' | 'sinsal' | 'etcSinsal';
}

// 사용자 정보
export interface MyInfo {
  name: string;
  gender: 'MALE' | 'FEMALE';
  birthDay: string;
  birthTime: string;
  frontTime: string;
  birthType: 'SOLAR' | 'LUNAR';
}

// 사용자 사주
interface Sky {
  korean: string;
  chinese: string;
  tenStar: string;
  sinsal?: string;
  unsung?: string;
  etcSinsal?: string[];
  fiveCircleColor: string;
  fiveCircleFrontColor: string;
}

interface Ground {
  korean: string;
  chinese: string;
  tenStar: string;
  sinsal?: string;
  unsung?: string;
  etcSinsal?: string[];
  fiveCircleColor: string;      
  fiveCircleFrontColor: string; 
}

export interface MySaju {
  yearSky: Sky;
  yearGround: Ground;
  monthSky: Sky;
  monthGround: Ground;
  daySky: Sky;
  dayGround: Ground;
  timeSky: Sky;
  timeGround: Ground;
}

// 청월사주 API 응답 타입
export interface CheongwolSaju {
  myInfo: MyInfo;
  mySaju: MySaju;
}