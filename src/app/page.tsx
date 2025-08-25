import Image from 'next/image';
// components
import BubbleTextLayout from '../components/shared/BubbleTextLayout';
import SajuTable from '@/components/shared/SajuTable';
// type & schema
import { CheongwolSaju } from '@/types/saju';
// constants
import { SAJU_ROW_HEADERS } from '@/constants';

// 피그마 프레임 width & height
const FIGMA_FRAME = { width: 375, height: 2081 };

// 피그마 말풍선 대사 rect
const FIGMA_BUBBLES = [
  {
    left: 64,
    top: 658,
    width: 134,
    height: 72,
    content: (name: string) => {
      if (name.length >= 2) name = name.slice(1);
      return ['이제 본격적으로', `${name}님의 사주팔자를`, '분석해볼 차례네요.'];
    },
  },
  {
    width: 171,
    height: 48,
    top: 1027,
    left: 57.88,
    content: (name: string) => {
      if (name.length >= 2) name = name.slice(1);
      return [`제가 ${name}님의 사주를`, '보기 쉽게 표로 정리했어요'];
    },
  },
];

export const dynamic = 'force-dynamic';

export default async function CheongwolSajuPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cheongwol-saju`); // 사용자 정보 & 사주 결과 API 요청
  const data: CheongwolSaju = await response.json();

  return (
    <main className="relative mx-auto max-w-md min-w-[275px] bg-[#F3F2EF]">
      {/* 청월아씨 사주 결과 인트로 */}
      <div
        className="relative"
        style={{ aspectRatio: `${FIGMA_FRAME.width}/${FIGMA_FRAME.height}` }} // 피그마 프레임 비율로 height 적용
      >
        <Image src="/cheongwol_intro.png" alt="intro" fill />

        {/* 말풍선 대사 */}
        {FIGMA_BUBBLES.map((bubble, index) => {
          const lines = bubble.content(data.myInfo.name); // 말풍선 대사 배열

          return (
            <BubbleTextLayout figmaRect={bubble} figmaFrame={FIGMA_FRAME} key={index}>
              <p className="w-full h-full text-black whitespace-nowrap flex flex-col items-center justify-center text-center text-xs xs:text-sm sm:text-base md:text-lg">
                {lines.map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </p>
            </BubbleTextLayout>
          );
        })}
      </div>

      {/* 청월아씨 사주 결과 테이블 */}
      <div
        className="absolute w-full bg-gradient-to-pbx-3 px-3"
        style={{ top: `${(1380 / FIGMA_FRAME.height) * 100}%` }} // 피그마 테이블 위치를 변환하여 적용
      >
        <SajuTable myInfo={data.myInfo} mySaju={data.mySaju} rowHeaders={SAJU_ROW_HEADERS} />
      </div>
    </main>
  );
}
