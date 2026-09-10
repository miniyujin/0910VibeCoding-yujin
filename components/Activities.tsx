import type { Activity } from "@/types/profile";
import Section from "./Section";

type ActivitiesProps = {
  title: string;
  items: Activity[];
};

export default function Activities({ title, items }: ActivitiesProps) {
  if (items.length === 0) return null;

  return (
    <Section title={title}>
      <ul className="space-y-5">
        {items.map((item) => (
          // 조직 이름이 길어 좁은 화면에서 줄바꿈되므로 가로로 붙이지 않고 세로로 쌓는다
          <li
            key={`${item.org}-${item.role}`}
            className="border-crimson flex flex-col gap-0.5 border-l-2 pl-4"
          >
            <span className="font-semibold text-zinc-100">{item.org}</span>
            <span className="text-crimson-lit text-sm">{item.role}</span>
            {item.note && (
              <span className="text-sm text-zinc-500">{item.note}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
