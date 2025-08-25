import Image from 'next/image';
// components
import SajuBadge from './SajuBadge';
// type & schema
import { MyInfo, MySaju, SajuRowHeader } from '@/types/saju';
// utils
import { formatBirth } from '@/utils';

const COLUMN_HEADER = {
  time: '時',
  day: '日',
  month: '月',
  year: '年',
};

interface SajuTableProps {
  myInfo: MyInfo;
  mySaju: MySaju;
  rowHeaders: SajuRowHeader[];
}

export default function SajuTable({ myInfo, mySaju, rowHeaders }: SajuTableProps) {
  return (
    <div className="relative border-[3px] border-[#1B2F49] bg-[#F5F3EC] shadow-md">
      <div className="absolute top-2 h-[1px] w-full bg-[#2B557E]" />
      <div className="absolute bottom-2 h-[1px] w-full bg-[#2B557E]" />
      <div className="absolute right-2 h-full w-[1px] bg-[#2B557E]" />
      <div className="absolute left-2 h-full w-[1px] bg-[#2B557E]" />

      <div className="absolute w-full flex justify-between px-2 mt-6">
        <div className="relative mt-5 h-[2.375rem] w-[3.5rem]">
          <Image src="/table_left_cloud.png" alt="left_cloud" fill />
        </div>
        <div className="relative mb-5 h-[2.375rem] w-[3.5rem]">
          <Image src="/table_right_cloud.png" alt="right_cloud" fill />
        </div>
      </div>

      <div className="mb-8 w-full items-center justify-center p-2 text-center">
        <div className="mb-6 mt-10 flex w-full flex-col items-center justify-center gap-1 text-center">
          <div className="text-center text-sm xs:text-lg">{myInfo.name}님의 사주</div>
          <div className="font-bold text-xl xs:text-2xl text-center">
            {formatBirth(myInfo.birthDay, myInfo.birthTime)}
          </div>
        </div>

        <div className="px-3">
          <div className="grid grid-cols-5 border-b-2 border-r-2 border-black text-xl xs:text-[1.375rem]">
            <div className="border-r-2 border-black" />
            {Object.values(COLUMN_HEADER).map((item, i) => (
              <div
                className="flex items-center justify-center py-2.5 border-r border-r-[#8A8A8A]"
                key={i}
              >
                {item[0]}
              </div>
            ))}
          </div>

          {rowHeaders.map(({ label, subLabel, target, field }, index) => (
            <div
              className={`grid grid-cols-5 ${index === 1 ? 'border-b border-b-[#8A8A8A]' : 'border-b-2'} border-r-2 border-black text-sm xs:text-base`}
              key={index}
            >
              <div className="flex flex-col items-center justify-center border-r-2 border-black">
                <div
                  className={`xs:text-sm ${label.length >= 4 ? 'text-[10px] xs:text-[12px]' : 'text-xs'}`}
                >
                  {label}
                </div>
                <div className="text-[8px] xs:text-[10px] mt-0.5">({subLabel})</div>
              </div>

              {Object.keys(COLUMN_HEADER).map(columnKey => {
                const key = (columnKey + target) as keyof MySaju;
                const value = mySaju[key];

                let content = value?.[field];
                if (Array.isArray(content)) {
                  content = content[0];
                }
                // console.log(`index: ${i}, content: ${content} key: ${key} field: ${field}`);

                return (
                  <div
                    key={key}
                    className="flex flex-col items-center justify-center bg-white p-1 border-r border-r-[#8a8a8a] min-h-[55.4px]"
                  >
                    {field === 'chinese' ? (
                      <SajuBadge
                        korean={value.korean}
                        chinese={value.chinese}
                        fiveCircleColor={value.fiveCircleColor}
                        fiveCircleFrontColor={value.fiveCircleFrontColor}
                      />
                    ) : (
                      <div className="whitespace-nowrap text-sm xs:text-base">
                        {content && <div>劫財</div>}
                        <div className="text-[8px] xs:text-[10px] mt-0.5">
                          ({content || '없음'})
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
