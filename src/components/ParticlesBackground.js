"use client"

import { motion } from "framer-motion";
import { useMemo } from "react";

const COUNT = 18;

export default function ParticlesBackground() {
  // Rasgele değerleri sadece 1 kez üret
  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100, // %
        size: 18 + Math.random() * 14, // px
        duration: 12 + Math.random() * 10, // sn
        delay: Math.random() * 5, // sn
        drift: (Math.random() - 0.5) * 40, // px
        emoji: ["📚", "📖", "📝", "✏️", "📘", "📗"][i % 6],
      })),
    []
  );

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0, // ❗ negatif yapma, arkada kaybolur
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {particles &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              fontSize: p.size,
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,.15))",
              willChange: "transform, top, opacity",
            }}
            initial={{ top: "110vh", opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{
              top: "-10vh", // vh ile animasyon serbest
              opacity: [0, 0.6, 0.8, 0.6, 0],
              x: [0, p.drift * 0.3, p.drift * 0.8, p.drift],
              rotate: [0, 120, 240, 360],
              scale: [0.8, 1, 0.9, 0.8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          >
            {p.emoji}
          </motion.div>
        ))}
    </div>
  );
}
