"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through a list of labels with a typewriter type-out / delete effect,
 * matching the reference site's rotating role badge ("Frontend Developer" ->
 * "Software Engineer" -> ...).
 */
export default function RoleRotator({
  words,
  typingSpeed = 55,
  deletingSpeed = 30,
  pause = 1400,
  className = "",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[0.9em] bg-current ml-1 align-middle animate-pulse" />
    </span>
  );
}
