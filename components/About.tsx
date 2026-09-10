import Section from "./Section";

type AboutProps = {
  title: string;
  text: string;
};

export default function About({ title, text }: AboutProps) {
  if (!text) return null;

  return (
    <Section title={title}>
      <p className="leading-relaxed text-zinc-300">{text}</p>
    </Section>
  );
}
