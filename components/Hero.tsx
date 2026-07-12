"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/site-content";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden bg-aura-black">
      {/* ambient film-grain / vignette layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,162,76,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,9,8,0.2)_0%,rgba(11,9,8,0.9)_85%)]" />

      {/* sprocket-hole rail, top and bottom — the signature filmstrip motif */}
      <div className="absolute top-0 inset-x-0 h-3 flex justify-between px-4 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 mt-1 bg-aura-gold/60 rounded-[1px]" />
        ))}
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 pb-20 md:pb-28 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-body text-xs md:text-sm tracking-widest2 text-aura-gold uppercase mb-6"
        >
          {siteContent.brand.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-aura-cream text-[13vw] md:text-[7.5vw] leading-[0.95] tracking-tight"
        >
          Films worth
          <br />
          <span className="italic text-aura-gold">re-living.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-md flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <p className="font-body text-aura-muted text-sm leading-relaxed">
            {siteContent.brand.blurb}
          </p>
          <a
            href="#work"
            className="shrink-0 font-body text-xs tracking-[0.2em] uppercase text-aura-black bg-aura-gold px-6 py-3 hover:bg-aura-goldLight transition-colors text-center"
          >
            View the Work
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-3 flex justify-between px-4 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 mb-1 bg-aura-gold/60 rounded-[1px]" />
        ))}
      </div>
    </section>
  );
}
