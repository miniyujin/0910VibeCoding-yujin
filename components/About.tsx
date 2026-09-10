import Section from "./Section";

type AboutProps = {
  title: string;
  text: string;
};

export default function About({ title, text }: AboutProps) {
  if (!text) return null;

  return (
    <Section title={title} tone="pink" tilt={-2}>
      <div className="bg-cream text-grape border-ink shadow-[9px_9px_0_var(--color-teal),9px_9px_0_6px_var(--color-ink)] rounded-[22px] border-[6px] px-[26px] py-6 rotate-[0.6deg]">
        <p className="m-0 text-base leading-[1.85] text-pretty">{text}</p>
      </div>
    </Section>
  );
}
