"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/site-content";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-aura-black pt-28 md:pt-36 pb-10 border-t border-aura-gold/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(201,162,76,0.10),transparent_60%)]" />

      <div className="relative px-6 md:px-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-4"
        >
          Let's create
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-aura-cream text-4xl md:text-6xl leading-tight mb-10"
        >
          timeless memories <span className="italic text-aura-gold">together.</span>
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-body text-sm text-aura-cream/90">
          <a href={`tel:${siteContent.brand.phone}`} className="hover:text-aura-gold transition-colors">
            {siteContent.brand.phone}
          </a>
          <span className="hidden sm:block text-aura-gold/30">/</span>
          <a href={`mailto:${siteContent.brand.email}`} className="hover:text-aura-gold transition-colors">
            {siteContent.brand.email}
          </a>
          <span className="hidden sm:block text-aura-gold/30">/</span>
          <a
            href={`https://instagram.com/${siteContent.brand.instagram.replace("@", "")}`}
            target="_blank"
            className="hover:text-aura-gold transition-colors"
          >
            {siteContent.brand.instagram}
          </a>
        </div>
      </div>

      <div className="relative mt-24 px-6 md:px-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-aura-gold/10">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="DK Film Aura" width={22} height={22} className="invert opacity-70" />
          <span className="font-body text-xs tracking-widest2 uppercase text-aura-muted">
            {siteContent.brand.name}
          </span>
        </div>
        <p className="font-body text-xs text-aura-muted">
          © {new Date().getFullYear()} {siteContent.brand.name}. Crafting timeless wedding films.
        </p>
      </div>
    </footer>
  );
}
