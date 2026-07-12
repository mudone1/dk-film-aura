"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/site-content";

export default function Experience() {
  return (
    <section id="experience" className="bg-aura-black py-28 md:py-36 border-t border-aura-gold/10">
      <div className="px-6 md:px-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-3"
          >
            Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-aura-cream text-4xl md:text-6xl"
          >
            Experience
          </motion.h2>
        </div>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-aura-gold/25" />

          {siteContent.experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0.15, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-8 md:-left-10 top-1.5 w-2.5 h-2.5 rounded-full bg-aura-gold" />
              <h3 className="font-display text-aura-cream text-xl md:text-2xl">{job.role}</h3>
              <p className="font-body text-aura-gold text-xs tracking-widest2 uppercase mt-2">
                {job.company} · {job.meta}
              </p>
              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-body text-sm text-aura-muted leading-relaxed">
                    <span className="text-aura-gold mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-10 border-t border-aura-gold/10 grid sm:grid-cols-2 gap-8 text-center sm:text-left"
        >
          <div>
            <p className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-2">
              Education
            </p>
            <p className="font-body text-aura-cream text-sm">{siteContent.education.school}</p>
            <p className="font-body text-aura-muted text-xs mt-1">{siteContent.education.detail}</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-2">
              Languages
            </p>
            <p className="font-body text-aura-muted text-sm">
              {siteContent.languages.join(" · ")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
