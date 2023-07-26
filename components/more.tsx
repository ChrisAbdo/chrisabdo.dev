"use client";

import { motion } from "framer-motion";
import HackathonProjects from "./hackathon-projects";
import Link from "next/link";

export default function More() {
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
        className="mb-2 text-muted-foreground font-display text-lg drop-shadow-sm md:text-2xl"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        More
      </motion.h1>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <p className="mt-1  font-display text-sm drop-shadow-sm md:text-lg">
          I&#39;m currently working on a few projects &#40;coming soon!&#41;,
          focusing on AI and design. Do not hesitate to reach out if you have a
          project in mind, or just want to say hi! You can see more of my work
          on{" "}
          <Link
            href="https://www.x.com/abdo_eth"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Twitter / X
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.github.com/chrisabdo"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            GitHub
          </Link>
          .
        </p>
      </motion.div>
    </motion.div>
  );
}
