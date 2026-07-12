"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/site-content";
import ScrollRevealText from "./ScrollRevealText";

const STATS = [
  { icon: "🎬", label: "Experience", value: "5+ Yrs Filming" },
  { icon: "💍", label: "Delivered", value: "80+ Weddings" },
  { icon: "🕊️", label: "Support", value: "Online 24/7" },
];

const BIO_PARAGRAPHS = [
  `Founder and lead cinematographer at ${siteContent.brand.name}. Every film starts the same way — by paying attention. The vows nobody planned to say out loud, the look between parents before the processional, the beat of silence before the room erupts. That's the footage that lasts.`,
  `I'm skilled across cinematic coverage, drone footage, same-day edits, and full documentary-style films — built on years of shooting weddings, traditional ceremonies, and events across Nigeria. I enjoy being part of someone's biggest day, where every frame carries the weight of the moment it was born from.`,
];

export default function About() {
  return (
    <section id="about" className="bg-aura-black py-28 md:py-36 border-t border-aura-gold/10">
      <div className="px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 md:sticky md:top-28"
        >
          <div className="absolute -inset-3 border border-aura-gold/30" />
          <Image
            src="/founder.jpeg"
            alt={siteContent.brand.founder}
            fill
            className="object-cover grayscale-[15%]"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-4"
          >
            The Filmmaker
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-aura-cream text-3xl md:text-5xl leading-tight mb-10"
          >
            {siteContent.brand.founder}
          </motion.h2>

          {/* staggered stat cards, mirrors the reference site's Experience/Completed/Support row */}
          <div className="grid grid-cols-3 gap-3 mb-12 max-w-md">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="border border-aura-gold/20 bg-aura-charcoal/60 px-3 py-4 text-center"
              >
                <div className="text-lg mb-1">{s.icon}</div>
                <p className="font-body text-aura-cream text-xs font-medium">{s.label}</p>
                <p className="font-body text-aura-muted text-[11px] mt-0.5">{s.value}</p>
              </motion.div>
            ))}
          </div>

          {/* signature scroll-linked reveal: words dim -> gold-lit as you scroll */}
          <div className="space-y-6 max-w-md">
            {BIO_PARAGRAPHS.map((p, i) => (
              <ScrollRevealText
                key={i}
                text={p}
                className="font-body text-aura-cream text-sm md:text-base leading-relaxed"
              />
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="mt-10 inline-block font-body text-xs tracking-[0.2em] uppercase bg-aura-cream text-aura-black px-6 py-3 hover:bg-aura-gold transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}

