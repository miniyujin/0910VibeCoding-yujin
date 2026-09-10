import type { Metadata } from "next";
import "./globals.css";
import { getProfile } from "@/lib/profile";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();

  return {
    title: profile.name,
    description: profile.tagline,
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* next/font 대신 직접 링크한다. Bagel Fat One 과 Noto Sans KR 은
            next/font 의 subset 목록에 한국어가 없어 한글이 폴백 폰트로 떨어진다.
            아래 규칙은 pages 라우터용이라 App Router 의 루트 layout 에는 해당하지 않는다.
            여기 둔 <link> 는 이미 모든 페이지에 적용된다. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Bodoni+Moda:ital,wght@1,500;1,700&family=Noto+Sans+KR:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink text-cream font-sans min-h-full">{children}</body>
    </html>
  );
}
