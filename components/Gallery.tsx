"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import VideoLightbox from "./VideoLightbox";

type Project = {
  id: string;
  category: string;
  title: string;
  location: string;
  type?: "image" | "video";
  image?: string;
  driveId?: string;
};

const CATEGORIES = ["Weddings", "Short Content", "Social Graphics"] as const;

export default function Gallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Weddings");
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d.projects ?? []))
      .catch(() => setProjects([]));
  }, []);

  const shown = projects.filter((p) => p.category === active);

  return (
    <section id="work" className="bg-aura-black py-28 md:py-36 border-t border-aura-gold/10">
      <div className="px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-body text-xs tracking-widest2 text-aura-gold uppercase mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-aura-cream text-4xl md:text-5xl">
            A frame from every story.
          </h2>
        </div>

        <div className="flex gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-colors ${
                active === c
                  ? "border-aura-gold bg-aura-gold text-aura-black"
                  : "border-aura-gold/30 text-aura-muted hover:border-aura-gold hover:text-aura-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* filmstrip: horizontal drag-scroll, sprocket rails top & bottom */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 flex gap-6 px-6 md:px-10 opacity-30 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-aura-gold shrink-0" />
          ))}
        </div>

        <motion.div
          className="filmstrip flex gap-5 overflow-x-auto px-6 md:px-10 pb-6 pt-6 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {shown.length === 0 && (
            <p className="text-aura-muted text-sm py-16">
              Add images for “{active}” via the projects API or data/projects.json.
            </p>
          )}
          {shown.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{ scrollSnapAlign: "start" }}
              onClick={() => {
                if (p.type === "video" && p.driveId) {
                  setLightboxId(p.driveId);
                  setLightboxTitle(p.title);
                }
              }}
              className={`relative shrink-0 w-[78vw] sm:w-[46vw] md:w-[30vw] aspect-[4/5] bg-aura-charcoal border border-aura-gold/15 overflow-hidden group ${
                p.type === "video" ? "cursor-pointer" : ""
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,9,8,0.9)_100%)] z-10" />
              {p.type === "video" && p.driveId ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://drive.google.com/thumbnail?id=${p.driveId}&sz=w1000`}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-aura-gold/70 bg-aura-black/50 flex items-center justify-center group-hover:bg-aura-gold group-hover:border-aura-gold transition-colors">
                      <span className="text-aura-gold group-hover:text-aura-black text-lg ml-1">▶</span>
                    </div>
                  </div>
                </>
              ) : p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-aura-muted/40 font-display text-sm">
                  image
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <p className="font-display text-aura-cream text-lg">{p.title}</p>
                <p className="font-body text-aura-gold text-xs tracking-widest2 uppercase mt-1">
                  {p.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-2 flex gap-6 px-6 md:px-10 opacity-30 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-aura-gold shrink-0" />
          ))}
        </div>
      </div>

      <VideoLightbox
        driveId={lightboxId}
        title={lightboxTitle}
        onClose={() => setLightboxId(null)}
      />
    </section>
  );
}
