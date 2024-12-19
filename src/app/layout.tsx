import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seoyun Portfolio",
  description: "Seoyun Portfolio Link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          href="/favicon-32x32.svg"
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
