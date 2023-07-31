"use client";

import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeIcon, MoveIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function UI() {
  let projects = [
    {
      name: "ui.chrisabdo.dev",
      description:
        "A collection of Open Source UI components I've built for my personal websites.",
      href: "https://ui.chrisabdo.dev",
      icon: <MoveIcon className="h-5 w-5" />,
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <Link href={project.href} key={project.name}>
          <Alert className="cursor-pointer border-0 py-4 hover:bg-secondary dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out">
            <AlertTitle className="text-xl">{project.name}</AlertTitle>
            <AlertDescription>{project.description}</AlertDescription>
          </Alert>
        </Link>
      ))}
    </>
  );
}
