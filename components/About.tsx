"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/site-content";

export default function About() {
  return (
    <section id="about" className="bg-aura-black py-28 md:py-36 border-t border-aura-gold/10">
      <div className="px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0"
        >
          <div className="absolute -inset-3 border border-aura-gold/30" />
          <Image
            src="/founder.jpeg"
            alt={siteContent.brand.founder}
            fill
            className="object-cover grayscale-[15%]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-4">
            The Filmmaker
          </p>
          <h2 className="font-display text-aura-cream text-3xl md:text-5xl leading-tight mb-6">
            {siteContent.brand.founder}
          </h2>
          <p className="font-body text-aura-muted text-sm leading-relaxed max-w-md">
            Founder and lead cinematographer at {siteContent.brand.name}. Every
            film starts the same way — by paying attention. The vows nobody
            planned to say out loud, the look between parents before the
            processional, the beat of silence before the room erupts. That's
            the footage that lasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
