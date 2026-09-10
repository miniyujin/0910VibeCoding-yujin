import { Fragment } from "react";

type HeroProps = {
  name: string;
  nameLatin: string;
  badge: string;
  sticker: string[];
  tagline: string;
};

/** 카세트 테이프 */
function Cassette() {
  return (
    <div className="border-ink shadow-[7px_7px_0_var(--color-teal),7px_7px_0_6px_var(--color-ink)] bg-cream flex h-24 w-[150px] flex-col gap-2 rounded-xl border-[6px] p-2.5 rotate-[-4deg]">
      <div className="text-plum font-mono flex items-center justify-between text-[9px] font-bold">
        <span className="tracking-[0.16em]">SIDE A</span>
        <span>60</span>
      </div>
      <div className="bg-grape flex flex-1 items-center justify-center gap-6 rounded-md">
        <span className="bg-cream border-pink block h-5 w-5 rounded-full border-[5px]" />
        <span className="bg-cream border-tangerine block h-5 w-5 rounded-full border-[5px]" />
      </div>
    </div>
  );
}

/** 레코드판 */
function Record() {
  return (
    <div className="bg-ink border-cream flex h-26 w-26 items-center justify-center rounded-full border-[6px] shadow-[6px_6px_0_rgba(21,12,46,0.5)] rotate-[6deg]">
      <span className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-[rgba(255,246,229,0.35)]">
        <span className="bg-butter flex h-[30px] w-[30px] items-center justify-center rounded-full">
          <span className="bg-ink block h-[7px] w-[7px] rounded-full" />
        </span>
      </span>
    </div>
  );
}

/** 카세트 플레이어 */
function Boombox() {
  return (
    <div className="bg-teal border-ink shadow-[7px_7px_0_var(--color-pink),7px_7px_0_6px_var(--color-ink)] flex h-24 w-[132px] flex-col justify-between rounded-[14px] border-[6px] px-3 pt-3 rotate-[3deg]">
      <div className="flex gap-2">
        <span className="bg-grape block h-[26px] w-[34px] rounded-t-lg rounded-b" />
        <span className="bg-grape block h-1.5 flex-1 self-center rounded-sm" />
      </div>
      <div className="flex justify-between px-1">
        <span className="bg-ink border-cream -mb-[13px] block h-[26px] w-[26px] rounded-full border-4" />
        <span className="bg-ink border-cream -mb-[13px] block h-[26px] w-[26px] rounded-full border-4" />
      </div>
    </div>
  );
}

export default function Hero({
  name,
  nameLatin,
  badge,
  sticker,
  tagline,
}: HeroProps) {
  return (
    <header className="relative z-10 overflow-hidden px-6 pb-[72px]">
      {/* 히어로 아래쪽을 훑는 주사선 */}
      <div
        aria-hidden
        className="absolute right-0 bottom-0 left-0 h-[220px] bg-[repeating-linear-gradient(180deg,rgba(56,217,217,0.35)_0px,rgba(56,217,217,0.35)_2px,transparent_2px,transparent_22px)]"
      />

      <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-[22px] pt-22 text-center">
        <div className="bg-teal text-ink border-cream font-mono inline-flex items-center gap-2.5 rounded-full border-4 px-[18px] py-[7px] text-[13px] font-bold tracking-[0.18em] shadow-[5px_5px_0_rgba(21,12,46,0.45)] rotate-[-3deg]">
          <span className="bg-pink inline-block h-[9px] w-[9px] rounded-full" />
          {badge}
        </div>

        <div className="relative rotate-[-1.5deg]">
          <div className="bg-cream border-ink shadow-[12px_12px_0_var(--color-pink),12px_12px_0_7px_var(--color-ink)] rounded-[28px] border-[7px] px-10 pt-[26px] pb-[30px]">
            <div className="text-plum mb-1.5 text-[15px] italic tracking-[0.3em] uppercase">
              {nameLatin}
            </div>
            <h1 className="text-grape font-display m-0 text-[clamp(46px,11vw,82px)] leading-none tracking-[0.02em]">
              {name}
            </h1>
          </div>

          <div className="bg-tangerine text-grape border-cream font-mono absolute -top-[26px] -right-[26px] flex h-[86px] w-[86px] items-center justify-center rounded-full border-[5px] text-center text-[11px] leading-[1.25] font-bold shadow-[4px_4px_0_rgba(21,12,46,0.5)] rotate-[14deg]">
            <span>
              {sticker.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </span>
          </div>
        </div>

        <p className="text-cream mt-1.5 max-w-[520px] text-base leading-[1.7] font-medium text-pretty [text-shadow:0_2px_0_rgba(43,19,80,0.6)]">
          {tagline}
        </p>

        <div className="mt-3.5 flex flex-wrap items-end justify-center gap-[22px]">
          <Cassette />
          <Record />
          <Boombox />
        </div>
      </div>
    </header>
  );
}
