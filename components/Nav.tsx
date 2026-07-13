"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-aura-black/90 backdrop-blur-sm border-b border-aura-gold/15" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo.png" alt="DK Film Aura" width={36} height={36} className="invert" />
          <span className="font-display text-sm tracking-widest2 text-aura-cream hidden sm:block">
            DK FILM AURA
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-10 font-body text-xs tracking-[0.2em] uppercase text-aura-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-aura-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-xs tracking-[0.2em] uppercase border border-aura-gold text-aura-gold px-4 py-2 hover:bg-aura-gold hover:text-aura-black transition-colors"
        >
          Book
        </a>
      </nav>
    </header>
  );
}
