import About from "@/components/About";
import Activities from "@/components/Activities";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Links from "@/components/Links";
import { getProfile } from "@/lib/profile";

export default async function Home() {
  const profile = await getProfile();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
      <Hero name={profile.name} tagline={profile.tagline} />

      <div className="mt-14 space-y-14">
        <About title="About" text={profile.about} />
        <Activities title="Activities" items={profile.activities} />
        <Interests title="Interests" items={profile.interests} />
        <Links title="Links" items={profile.links} />
      </div>
    </main>
  );
}
