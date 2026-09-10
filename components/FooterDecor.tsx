const BARS = [
  { height: 26, color: "bg-butter" },
  { height: 46, color: "bg-tangerine" },
  { height: 66, color: "bg-pink" },
  { height: 38, color: "bg-teal" },
  { height: 54, color: "bg-cream" },
];

export default function FooterDecor({ handle }: { handle: string }) {
  return (
    <>
      <div
        aria-hidden
        className="flex flex-wrap items-end justify-center gap-[26px] pt-2"
      >
        {/* 로켓 */}
        <div className="flex flex-col items-center rotate-[-5deg]">
          {/* CSS 삼각형: 굵기와 색을 한 속성에 같이 줘야 해서 인라인으로 둔다
              (border-t-[40px] 과 border-t-[색] 을 함께 쓰면 서로 충돌해 둘 다 무시된다) */}
          <span
            className="block h-0 w-0"
            style={{
              borderLeft: "34px solid transparent",
              borderRight: "34px solid transparent",
              borderTop: "40px solid var(--color-pink)",
            }}
          />
          <span className="bg-pink block h-[34px] w-1.5" />
          <span className="bg-pink block h-2 w-11 rounded-sm" />
        </div>

        {/* 이퀄라이저 */}
        <div className="flex items-end gap-[7px]">
          {BARS.map((bar) => (
            <span
              key={bar.height}
              className={`${bar.color} block w-3 rounded-sm`}
              style={{ height: `${bar.height}px` }}
            />
          ))}
        </div>

        {/* 지는 해 */}
        <div className="border-cream h-[78px] w-[78px] rounded-full border-[6px] bg-[linear-gradient(180deg,#ffe27a,#ff6a5f)] shadow-[5px_5px_0_rgba(21,12,46,0.5)] rotate-[4deg]" />
      </div>

      <div className="flex justify-center pt-2">
        <span className="text-butter font-mono text-[11px] tracking-[0.3em] [text-shadow:0_0_8px_#ff9f45,0_0_20px_#ff4d8d]">
          {handle}
        </span>
      </div>
    </>
  );
}
