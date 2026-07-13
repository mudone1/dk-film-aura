"use client";

import { motion } from "framer-motion";

/**
 * Types text out character by character, with each letter popping/jumping
 * into place (back-out easing gives the little overshoot bounce) rather than
 * a plain fade — triggers once when scrolled into view, finishes with a
 * blinking cursor.
 */
export default function TypewriterText({
  text,
  className = "",
  charDelay = 0.045,
  startDelay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  charDelay?: number;
  startDelay?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const letters = Array.from(text);

  return (
    <Tag className={className} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.4,
            delay: startDelay + i * charDelay,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay: startDelay + letters.length * charDelay }}
        className="inline-block w-[3px] h-[0.8em] bg-current ml-1 align-middle animate-pulse"
      />
    </Tag>
  );
}
