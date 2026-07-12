"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/site-content";

export default function Skills() {
  return (
    <section id="skills" className="bg-aura-charcoal py-28 md:py-36 border-t border-aura-gold/10">
      <div className="px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-3"
          >
            Craft
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-aura-cream text-4xl md:text-6xl"
          >
            Skills & Tools
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteContent.skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="border border-aura-gold/20 bg-aura-black px-6 py-8"
            >
              <h3 className="font-display text-aura-gold text-xl text-center mb-6">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.4, delay: gi * 0.1 + i * 0.07 }}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full border border-aura-gold/50 flex items-center justify-center text-aura-gold text-[9px]">
                      ✓
                    </span>
                    <div>
                      <p className="font-body text-aura-cream text-sm font-medium leading-tight">
                        {skill.name}
                      </p>
                      <p className="font-body text-aura-muted text-[11px] mt-0.5">
                        {skill.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
