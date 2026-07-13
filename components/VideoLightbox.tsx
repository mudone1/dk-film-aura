"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function VideoLightbox({
  driveId,
  title,
  onClose,
}: {
  driveId: string | null;
  title?: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {driveId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-aura-black/95 flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl aspect-video bg-aura-charcoal border border-aura-gold/25"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              allow="autoplay"
              allowFullScreen
              className="w-full h-full"
              title={title ?? "Video"}
            />
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-10 right-0 text-aura-cream text-xs tracking-widest2 uppercase hover:text-aura-gold transition-colors"
            >
              Close ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
