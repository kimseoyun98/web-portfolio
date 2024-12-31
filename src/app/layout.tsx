import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "서연의 포트폴리오",
  description:
    "포트폴리오 링크를 탐색하세요. (GitHub, Notion, Velog, LinkedIn)",

  openGraph: {
    title: "서연의 포트폴리오",
    siteName: "서연의 포트폴리오",
    description:
      "포트폴리오 링크를 탐색하세요. (GitHub, Notion, Velog, LinkedIn)",
    url: "https://web-portfolio-maris-projects-f46cfcf3.vercel.app",
    images: "https://web-portfolio-six-drab.vercel.app/opengraph.png",
    locale: "ko_KO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "서연의 포트폴리오",
    description:
      "포트폴리오 링크를 탐색하세요. (GitHub, Notion, Velog, LinkedIn)",
    images: "https://web-portfolio-six-drab.vercel.app/opengraph.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/favicon-14x14.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="/favicon-16x16.svg"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
