import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIOMAX AI v2.0 | Personal Health Operating System",
  description: "A multi-agent platform for health management with 15 specialized AI agents and 100+ integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased selection:bg-cyan-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
