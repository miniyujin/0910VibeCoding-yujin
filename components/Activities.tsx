import type { Activity } from "@/types/profile";
import Section from "./Section";

/** 카드가 기울어지는 정도. 0 이면 반듯하게 선다 */
const TILT = 1;

type ActivitiesProps = {
  title: string;
  items: Activity[];
};

export default function Activities({ title, items }: ActivitiesProps) {
  if (items.length === 0) return null;

  return (
    <Section title={title} tone="teal" tilt={2}>
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div
            key={`${item.org}-${item.role}`}
            className="bg-cream border-ink shadow-[8px_8px_0_var(--color-pink),8px_8px_0_6px_var(--color-ink)] flex items-start gap-4 rounded-[20px] border-[6px] px-5 py-[18px]"
            style={{
              // 한 장씩 번갈아 반대로 기울여 손으로 붙인 것처럼 보이게 한다
              transform: `rotate(${((i % 2 ? 1 : -1) * TILT * (0.6 + (i % 3) * 0.2)).toFixed(2)}deg)`,
            }}
          >
            <span className="text-pink font-serif flex-none text-2xl leading-[1.1] font-bold italic">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex min-w-0 flex-col gap-[5px]">
              <div className="text-grape text-base leading-[1.45] font-bold">
                {item.org}
              </div>
              <div className="flex">
                <span className="bg-grape text-butter rounded-full px-3 py-[3px] text-[13px] font-bold">
                  {item.role}
                </span>
              </div>
              {item.note && (
                <div className="text-plum text-[13px] leading-[1.6]">
                  {item.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
