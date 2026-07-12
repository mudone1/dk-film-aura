import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DK Film Aura | Cinematic Wedding Films",
  description:
    "DK Film Aura crafts cinematic, emotional, timeless wedding and event films. Based in Nigeria, booking worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
