"use client";

import { motion } from "framer-motion";

export default function Currently() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      className="mt-12 sm:mt-16"
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
        className="font-display text-muted-foreground tracking-[-0.09em] text-lg drop-shadow-sm md:text-2xl"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Currently
      </motion.h1>
      <motion.p
        className="mt-1  font-display text-sm drop-shadow-sm md:text-lg tracking-[-0.05em]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        I&#39;m a Software Engineering student at Drexel University
        &#40;&#39;24&#41;, candidate for a Bachelor of Science in Software
        Engineering. I enjoy crafting beautiful, functional, and user friendly
        experiences. I&#39;m also interested in the intersection of design and
        emotion, and how it can be used to create a more meaningful experience.
      </motion.p>
    </motion.div>
  );
}
