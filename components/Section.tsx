import type { ReactNode } from "react";

/** 라벨 알약의 색. 클래스 문자열을 통째로 두어야 Tailwind 가 걷어내지 않는다 */
const TONES = {
  pink: "bg-pink",
  teal: "bg-teal",
  tangerine: "bg-tangerine",
  butter: "bg-butter",
} as const;

export type SectionTone = keyof typeof TONES;

type SectionProps = {
  title: string;
  tone: SectionTone;
  /** 라벨을 기울이는 각도 */
  tilt: number;
  children: ReactNode;
};

export default function Section({
  title,
  tone,
  tilt,
  children,
}: SectionProps) {
  return (
    <section className="flex flex-col gap-[18px]">
      <div className="flex">
        <h2
          className={`${TONES[tone]} text-ink border-cream font-mono rounded-full border-4 px-4 py-1.5 text-xs font-bold tracking-[0.22em] shadow-[4px_4px_0_rgba(0,0,0,0.35)]`}
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
