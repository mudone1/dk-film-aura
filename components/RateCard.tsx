"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/site-content";

export default function RateCard() {
  return (
    <section id="rates" className="bg-aura-charcoal py-28 md:py-36 border-t border-aura-gold/10">
      <div className="px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-3"
          >
            Investment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-aura-cream text-4xl md:text-6xl leading-tight"
          >
            Wedding <span className="font-script text-aura-gold text-5xl md:text-7xl align-middle">Rate Card</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-aura-muted text-sm mt-6 max-w-md mx-auto"
          >
            {siteContent.brand.blurb}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteContent.packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative border p-8 flex flex-col ${
                pkg.popular
                  ? "border-aura-gold bg-aura-black scale-[1.02] md:-translate-y-2"
                  : "border-aura-gold/25 bg-aura-black/40"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-aura-gold text-aura-black text-[10px] tracking-widest2 uppercase px-3 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-aura-gold text-2xl">{pkg.name}</h3>
              <p className="font-body text-aura-muted text-xs uppercase tracking-widest2 mt-2">
                {pkg.tag}
              </p>
              <p className="font-display text-aura-cream text-4xl mt-6">{pkg.price}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-sm text-aura-cream/90">
                    <span className="text-aura-gold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 block text-center text-xs tracking-[0.2em] uppercase border border-aura-gold text-aura-gold py-3 hover:bg-aura-gold hover:text-aura-black transition-colors"
              >
                Enquire
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16 pt-16 border-t border-aura-gold/10">
          <div>
            <p className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-4">
              Add-ons
            </p>
            <ul className="space-y-2">
              {siteContent.addOns.map((a) => (
                <li
                  key={a.label}
                  className="flex justify-between font-body text-sm text-aura-cream/90 border-b border-aura-gold/10 py-2"
                >
                  <span>{a.label}</span>
                  <span className="text-aura-gold">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-4">
              Delivery Timeline
            </p>
            <ul className="space-y-2">
              {siteContent.delivery.map((d) => (
                <li
                  key={d.label}
                  className="flex justify-between font-body text-sm text-aura-cream/90 border-b border-aura-gold/10 py-2"
                >
                  <span>{d.label}</span>
                  <span className="text-aura-gold">{d.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
