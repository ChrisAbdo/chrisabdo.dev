"use client";

import { motion } from "framer-motion";
import Projects from "./projects";

export default function PersonalProjects() {
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
        className="mb-2 font-display text-muted-foreground text-lg drop-shadow-sm md:text-2xl"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Personal Projects
      </motion.h1>
      <motion.div
        className="flex flex-col gap-y-1"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <Projects />
      </motion.div>
    </motion.div>
  );
}
