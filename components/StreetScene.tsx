import { Fragment } from "react";

type BuildingProps = {
  width: number;
  height: number;
  cap: string;
  window: string;
  lit: number;
  pitchX: number;
  pitchY: number;
  children?: React.ReactNode;
};

/** 창문이 켜진 건물 한 채. 크기와 색이 전부 달라서 인라인 스타일로 계산한다 */
function Building({
  width,
  height,
  cap,
  window: windowColor,
  lit,
  pitchX,
  pitchY,
  children,
}: BuildingProps) {
  return (
    <div
      className="bg-night relative flex-none border-t-4 bg-blend-multiply"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderTopColor: cap,
        backgroundImage: [
          `repeating-linear-gradient(90deg,${windowColor} 0 ${lit}px,transparent ${lit}px ${pitchX}px)`,
          `repeating-linear-gradient(180deg,${windowColor} 0 ${lit}px,transparent ${lit}px ${pitchY}px)`,
        ].join(","),
      }}
    >
      {children}
    </div>
  );
}

const DASH_COUNT = 14;

export default function StreetScene({ name }: { name: string }) {
  return (
    <div className="relative z-10 h-[260px] overflow-hidden">
      {/* 길바닥에 번지는 분홍 불빛 */}
      <div
        aria-hidden
        className="absolute bottom-[52px] left-1/2 -ml-[380px] h-[120px] w-[760px] max-w-[150%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,77,141,0.55),transparent_70%)]"
      />

      <div className="absolute right-0 bottom-[52px] left-0 flex items-end justify-center gap-2.5 px-3">
        <Building
          width={56}
          height={104}
          cap="#38d9d9"
          window="rgba(255,226,122,0.75)"
          lit={6}
          pitchX={16}
          pitchY={18}
        />

        <Building
          width={74}
          height={168}
          cap="#ff4d8d"
          window="rgba(56,217,217,0.65)"
          lit={7}
          pitchX={18}
          pitchY={20}
        >
          {/* 이름을 세로로 세운 네온 간판 */}
          <div className="border-pink text-cream font-display absolute top-3.5 left-1/2 -ml-[21px] w-[42px] rounded-lg border-[3px] bg-[rgba(21,12,46,0.75)] py-2.5 text-center text-[15px] leading-[1.15] shadow-[0_0_14px_rgba(255,77,141,0.8),inset_0_0_12px_rgba(255,77,141,0.45)] [text-shadow:0_0_8px_#ff4d8d,0_0_18px_#ff4d8d]">
            {[...name].map((char, i) => (
              <Fragment key={`${char}-${i}`}>
                {i > 0 && <br />}
                {char}
              </Fragment>
            ))}
          </div>
        </Building>

        <Building
          width={44}
          height={78}
          cap="#ffe27a"
          window="rgba(255,159,69,0.7)"
          lit={5}
          pitchX={14}
          pitchY={16}
        />

        <Building
          width={88}
          height={196}
          cap="#38d9d9"
          window="rgba(255,226,122,0.6)"
          lit={8}
          pitchX={20}
          pitchY={22}
        >
          <div className="border-teal font-mono absolute top-[22px] -left-[26px] rounded-full border-[3px] bg-[rgba(21,12,46,0.7)] px-3.5 py-[7px] text-xs font-bold tracking-[0.16em] whitespace-nowrap text-[#eafffb] shadow-[0_0_16px_rgba(56,217,217,0.75),inset_0_0_12px_rgba(56,217,217,0.4)] [text-shadow:0_0_8px_#38d9d9,0_0_18px_#38d9d9]">
            OPEN 24H
          </div>
        </Building>

        <Building
          width={52}
          height={118}
          cap="#ff9f45"
          window="rgba(255,77,141,0.6)"
          lit={6}
          pitchX={16}
          pitchY={18}
        />

        <Building
          width={66}
          height={146}
          cap="#ffe27a"
          window="rgba(56,217,217,0.55)"
          lit={7}
          pitchX={17}
          pitchY={19}
        >
          {/* 건물 위로 걸린 달 */}
          <div
            aria-hidden
            className="border-butter absolute -top-[46px] left-1/2 -ml-[25px] h-[50px] w-[50px] rounded-full border-4 shadow-[0_0_16px_rgba(255,226,122,0.85),inset_0_0_12px_rgba(255,226,122,0.5)]"
          />
        </Building>

        <Building
          width={40}
          height={88}
          cap="#38d9d9"
          window="rgba(255,226,122,0.6)"
          lit={5}
          pitchX={14}
          pitchY={16}
        />
      </div>

      {/* 중앙선이 그어진 도로 */}
      <div
        aria-hidden
        className="border-grape absolute right-0 bottom-0 left-0 flex h-[52px] items-center gap-[22px] overflow-hidden border-t-[5px] bg-[#0b0619] px-5"
      >
        {Array.from({ length: DASH_COUNT }, (_, i) => (
          <span
            key={i}
            className="bg-butter block h-[5px] w-[34px] flex-none rounded-sm opacity-85"
          />
        ))}
      </div>
    </div>
  );
}
