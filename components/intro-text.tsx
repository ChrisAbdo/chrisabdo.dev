"use client";

import { motion } from "framer-motion";

export default function IntroText() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      className="mt-12"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="font-display text-xl tracking-[-0.02em]  md:text-4xl text-muted-foreground "
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Abdo, Christopher.
      </motion.h1>
      <motion.p
        className="font-display text-2xl tracking-[-0.02em]  md:text-5xl "
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Software & Design Engineer
      </motion.p>
    </motion.div>
  );
}
