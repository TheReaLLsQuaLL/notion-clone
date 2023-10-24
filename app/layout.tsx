import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion-Clone",
  description: "Notion-Clone made by Toprak YILDIZ",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/favicon_light.ico",
        href: "/favicon_light.ico",
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/favicon_dark.ico",
        href: "/favicon_dark.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
