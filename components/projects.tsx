"use client";

import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeIcon, MoveIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Projects() {
  let projects = [
    {
      name: "Variant Vault",
      description:
        "A collection of Framer Motion variants and animations for your next project.",
      href: "https://variantvault.chrisabdo.dev",
      icon: <MoveIcon className="h-5 w-5" />,
    },
    {
      name: "AI PDF Summarizer",
      description:
        "An AI PDF Summarizer built with Next.js, Vercel Edge Functions, GPT-4 API, and Tailwind CSS.",
      href: "https://pdfsummary.vercel.app",
      icon: <CodeIcon className="h-5 w-5" />,
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <Link
          href={project.href}
          key={project.name}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Alert className="cursor-pointer border-0 py-4 hover:bg-secondary dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out">
            <AlertTitle className="text-xl">{project.name}</AlertTitle>
            <AlertDescription>{project.description}</AlertDescription>
          </Alert>
        </Link>
      ))}
    </>
  );
}
