import Section from "./Section";

type InterestsProps = {
  title: string;
  items: string[];
};

export default function Interests({ title, items }: InterestsProps) {
  if (items.length === 0) return null;

  return (
    <Section title={title}>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-crimson/50 rounded-full border px-3 py-1 text-sm text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
