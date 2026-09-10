// 페이지 전체 뒤에 깔리는 밤의 도시. 순수 장식이라 스크린리더에서는 숨긴다.
// 건물·간판의 크기와 색이 항목마다 달라서, 이 부분만 인라인 스타일로 계산한다.

const TOWER_SIZES: [number, number][] = [
  [34, 180],
  [52, 300],
  [40, 240],
  [70, 420],
  [28, 200],
  [58, 340],
  [46, 260],
  [92, 520],
  [38, 300],
  [64, 380],
  [30, 220],
  [50, 290],
  [72, 440],
  [36, 250],
  [56, 330],
  [42, 200],
];

const TOWER_CAPS = ["#38d9d9", "#ff4d8d", "#ffe27a", "#8f6bff"];
const TOWER_WINDOWS = [
  "rgba(255,226,122,0.55)",
  "rgba(56,217,217,0.5)",
  "rgba(255,150,200,0.45)",
];
const TOWER_GLOWS = [
  "rgba(56,217,217,0.28)",
  "rgba(255,77,141,0.26)",
  "rgba(143,107,255,0.26)",
];

const LEFT_SIGN_HEIGHTS = [
  56, 30, 74, 22, 48, 90, 36, 60, 26, 82, 40, 68, 32, 54, 88, 44,
];
const LEFT_SIGN_COLORS = ["#ff4d8d", "#38d9d9", "#ffe27a", "#8f6bff"];

const RIGHT_SIGN_HEIGHTS = [
  40, 82, 26, 62, 34, 70, 50, 28, 76, 46, 90, 36, 58, 24, 66, 52,
];
const RIGHT_SIGN_COLORS = ["#38d9d9", "#ffe27a", "#ff4d8d", "#8f6bff"];

/** 창문 격자: 가로세로로 같은 간격의 줄무늬를 겹쳐 창문처럼 보이게 한다 */
function windowGrid(color: string, lit: number, pitch: number) {
  return [
    `repeating-linear-gradient(90deg,${color} 0 ${lit}px,transparent ${lit}px ${pitch}px)`,
    `repeating-linear-gradient(180deg,${color} 0 ${lit}px,transparent ${lit}px ${pitch}px)`,
  ].join(",");
}

function NeonSign({
  height,
  color,
  inset,
  side,
}: {
  height: number;
  color: string;
  inset: number;
  side: "left" | "right";
}) {
  return (
    <div
      className="rounded-[4px] border-2 bg-[rgba(4,18,29,0.55)] opacity-80"
      style={{
        height: `${height}px`,
        borderColor: color,
        boxShadow: `0 0 16px ${color},inset 0 0 14px ${color}`,
        ...(side === "left"
          ? { marginRight: `${inset}px` }
          : { marginLeft: `${inset}px` }),
      }}
    />
  );
}

export default function NightBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[linear-gradient(180deg,#04101c_0%,#072031_22%,#0a2b3e_55%,#07202e_80%,#04121d_100%)]"
    >
      {/* 오른쪽 위에 뜬 붉은 달 */}
      <div className="absolute top-[-80px] right-[-90px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_38%_34%,#e26a9a_0%,#a8365f_45%,#5d1c46_100%)] shadow-[0_0_120px_rgba(226,106,154,0.45)]" />
      {/* 왼쪽에서 번지는 청록 빛 */}
      <div className="absolute top-20 left-[-60px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(56,217,217,0.28),transparent_68%)]" />

      {/* 맨 아래 스카이라인 */}
      <div className="absolute right-0 bottom-0 left-0 flex h-[560px] items-end justify-center gap-1.5">
        {TOWER_SIZES.map(([width, height], i) => (
          <div
            key={i}
            className="bg-abyss flex-none border-t-[3px] bg-blend-multiply"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              borderTopColor: TOWER_CAPS[i % TOWER_CAPS.length],
              backgroundImage: windowGrid(
                TOWER_WINDOWS[i % TOWER_WINDOWS.length],
                5 + (i % 3),
                15 + (i % 4) * 2,
              ),
              boxShadow: `0 0 26px ${TOWER_GLOWS[i % TOWER_GLOWS.length]}`,
            }}
          />
        ))}
      </div>

      {/* 양옆으로 늘어선 네온 간판 */}
      <div className="absolute top-0 bottom-0 left-0 flex w-28 flex-col justify-around gap-3.5 px-2.5 py-6">
        {LEFT_SIGN_HEIGHTS.map((height, i) => (
          <NeonSign
            key={i}
            height={height}
            color={LEFT_SIGN_COLORS[i % LEFT_SIGN_COLORS.length]}
            inset={(i % 3) * 12}
            side="left"
          />
        ))}
      </div>
      <div className="absolute top-0 right-0 bottom-0 flex w-28 flex-col justify-around gap-3.5 px-2.5 py-6">
        {RIGHT_SIGN_HEIGHTS.map((height, i) => (
          <NeonSign
            key={i}
            height={height}
            color={RIGHT_SIGN_COLORS[i % RIGHT_SIGN_COLORS.length]}
            inset={(i % 3) * 14}
            side="right"
          />
        ))}
      </div>

      {/* 바닥에서 올라오는 빛과 위아래 비네팅 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_78%,rgba(56,217,217,0.16),transparent_62%),linear-gradient(180deg,rgba(4,16,28,0.35)_0%,transparent_35%,rgba(4,16,28,0.55)_100%)]" />
    </div>
  );
}
