interface SajuBadgeProps {
  korean: string;
  chinese: string;
  fiveCircleColor: string;
  fiveCircleFrontColor: string;
}

export default function SajuBadge({
  korean,
  chinese,
  fiveCircleColor,
  fiveCircleFrontColor,
}: SajuBadgeProps) {
  return (
    <div
      className="flex flex-col items-center justify-between p-1.5 border-b border-r border-b-[#8A8A8A] border-r-[#8A8A8A] bg-white rounded-xl aspect-square w-full"
      style={{ backgroundColor: fiveCircleColor, color: fiveCircleFrontColor }}
    >
      <div className="text-[6px] xs:text-[8px] sm:text-[10px] leading-[100%]">{korean}</div>
      <div className="text-lg xs:text-xl sm:text-2xl leading-[100%] tracking-normal pt-0.5 sm:pt-1">
        {chinese}
      </div>
      <div className="text-[6px] xs:text-[8px] sm:text-[10px] leading-[100%] tracking-normal">
        음수
      </div>
    </div>
  );
}
