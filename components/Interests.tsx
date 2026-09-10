import Section from "./Section";

/** 태그가 기울어지는 정도 */
const TILT = 1;
const SHADOWS = [
  "var(--color-pink)",
  "var(--color-teal)",
  "var(--color-tangerine)",
  "var(--color-butter)",
];

type InterestsProps = {
  title: string;
  items: string[];
};

export default function Interests({ title, items }: InterestsProps) {
  if (items.length === 0) return null;

  return (
    <Section title={title} tone="tangerine" tilt={-2}>
      <ul className="flex list-none flex-wrap gap-3.5 p-0">
        {items.map((item, i) => (
          <li
            key={item}
            className="bg-grape text-cream border-cream font-display rounded-full border-[5px] px-5 py-2.5 text-[15px]"
            style={{
              boxShadow: `5px 5px 0 ${SHADOWS[i % SHADOWS.length]}`,
              transform: `rotate(${((i % 2 ? 1 : -1) * TILT * 2).toFixed(2)}deg)`,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
