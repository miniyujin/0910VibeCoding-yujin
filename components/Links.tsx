import type { ProfileLink } from "@/types/profile";
import Section from "./Section";

type LinksProps = {
  title: string;
  items: ProfileLink[];
};

export default function Links({ title, items }: LinksProps) {
  if (items.length === 0) return null;

  return (
    <Section title={title}>
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {items.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="decoration-crimson hover:text-crimson-lit text-zinc-100 underline underline-offset-4 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
