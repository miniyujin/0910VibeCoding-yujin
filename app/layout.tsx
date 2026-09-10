import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { getProfile } from "@/lib/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();

  return {
    title: profile.name,
    description: profile.tagline,
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} h-full bg-black antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col bg-black text-zinc-100">
        {children}
      </body>
    </html>
  );
}
