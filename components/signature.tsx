"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

export default function Siganture() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", bounce: 0.1 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <motion.div ref={ref} className="mt-12 sm:mt-16">
      <motion.svg
        width="56"
        height="34"
        viewBox="0 0 56 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.path
          d="M7 2C7 6.89418 7.54 12.1726 6.77778 17C6.29871 20.0341 -0.0178276 37.0535 3 28"
          stroke="gray"
          stroke-width="3"
          stroke-linecap="round"
          variants={draw}
        />
        <motion.path
          d="M7 5C7 13.8864 11.1354 25.0677 19 29"
          stroke="gray"
          stroke-width="3"
          stroke-linecap="round"
          variants={draw}
        />
        <motion.path
          d="M5 23C7.73816 23 10.6985 23.5343 13 22"
          stroke="gray"
          stroke-width="3"
          stroke-linecap="round"
          variants={draw}
        />
        <motion.path
          d="M18 4C18 11.5314 19 19.0683 19 26.4444C19 29.7821 19.1802 29.9392 19.9444 26.5C20.516 23.9279 21.9266 21.3321 23.2222 19C26.1657 13.7018 33.6635 16.8057 30.5 22.5C29.3459 24.5774 27.092 25.6446 26 27.5556C24.5057 30.1706 21.1297 27.7405 20 30"
          stroke="gray"
          stroke-width="3"
          stroke-linecap="round"
          variants={draw}
        />
        <motion.path
          d="M44 2C44 8.81743 45.1494 16.718 43.2222 23.2222C42.5433 25.5138 43 32.7789 43 30.3889C43 27.6076 41.643 25.1434 41.0556 22.5C40.4604 19.8219 38.4938 19.8533 36 20C33.4308 20.1511 34 23.7965 34 25.5C34 29.5694 39.5509 32 43 32"
          stroke="gray"
          stroke-width="3"
          stroke-linecap="round"
          variants={draw}
        />
        <motion.path
          d="M53 20C48.5141 20 44.4235 30 49.5 30C51.7212 30 54 26.0541 54 24C54 20.2025 53.7975 20 50 20"
          stroke="gray"
          stroke-width="3"
          stroke-linecap="round"
          variants={draw}
        />
      </motion.svg>
    </motion.div>
  );
}
