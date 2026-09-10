import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-xs font-semibold tracking-[0.2em] text-crimson-lit uppercase">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
