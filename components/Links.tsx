import type { ProfileLink } from "@/types/profile";
import Section from "./Section";

type LinksProps = {
  title: string;
  items: ProfileLink[];
};

export default function Links({ title, items }: LinksProps) {
  if (items.length === 0) return null;

  return (
    <Section title={title} tone="butter" tilt={1.5}>
      <ul className="flex list-none flex-wrap gap-4 p-0">
        {items.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="bg-cream text-grape border-ink shadow-[8px_8px_0_var(--color-teal),8px_8px_0_6px_var(--color-ink)] hover:bg-teal hover:text-ink hover:shadow-[4px_4px_0_var(--color-pink),4px_4px_0_6px_var(--color-ink)] font-mono inline-flex translate-0 items-center gap-3 rounded-[18px] border-[6px] px-[22px] py-3.5 text-[15px] font-bold tracking-[0.08em] uppercase transition-all rotate-[-1deg] hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              {item.label}
              <span className="font-serif text-lg italic">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
