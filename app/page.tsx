import About from "@/components/About";
import Activities from "@/components/Activities";
import FooterDecor from "@/components/FooterDecor";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Links from "@/components/Links";
import NightBackdrop from "@/components/NightBackdrop";
import StreetScene from "@/components/StreetScene";
import { getProfile } from "@/lib/profile";

export default async function Home() {
  const profile = await getProfile();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <NightBackdrop />

      <Hero
        name={profile.name}
        nameLatin={profile.nameLatin}
        badge={profile.badge}
        sticker={profile.sticker}
        tagline={profile.tagline}
      />

      <StreetScene name={profile.name} />

      <main className="relative z-10 mx-auto flex max-w-[760px] flex-col gap-16 px-6 pt-14 pb-24">
        <About title="ABOUT" text={profile.about} />
        <Activities title="ACTIVITIES" items={profile.activities} />
        <Interests title="INTERESTS" items={profile.interests} />
        <Links title="LINKS" items={profile.links} />
        <FooterDecor handle={profile.handle} />
      </main>
    </div>
  );
}
