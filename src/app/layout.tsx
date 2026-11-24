import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: "MD.SUMON — Digital Professional",
  description: "Engineering ideas and building digital experiences across drafting, web development, AI, and creative technology.",
  openGraph: {
    title: "MD.SUMON — Digital Professional",
    description: "Engineering, development, and creative technology.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
