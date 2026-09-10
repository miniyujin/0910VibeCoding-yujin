type HeroProps = {
  name: string;
  tagline: string;
};

export default function Hero({ name, tagline }: HeroProps) {
  return (
    <header>
      <div className="bg-crimson h-1 w-12" />
      <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{name}</h1>
      <p className="mt-3 text-zinc-400">{tagline}</p>
    </header>
  );
}
