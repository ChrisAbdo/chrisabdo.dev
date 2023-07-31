"use client";

import { motion } from "framer-motion";
import HackathonProjects from "./hackathon-projects";

export default function Hackathons() {
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
        className="mb-2 text-muted-foreground font-display text-lg drop-shadow-sm md:text-2xl tracking-[-0.09em]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Hackathon Projects & Awards
      </motion.h1>
      <motion.div
        className="flex flex-col gap-y-1 tracking-[-0.05em]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <HackathonProjects />
      </motion.div>
    </motion.div>
  );
}
