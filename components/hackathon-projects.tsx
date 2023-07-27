"use client";

import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function HackathonProjects() {
  let projects = [
    {
      name: "Soulmates",
      description:
        "A soulbound token (SBT) issuance engine, built on FEVM (FileCoin Virtual Machine). Soulbound tokens with provably stored metadata, powered by F(E)VM.",
      href: "https://ethglobal.com/showcase/soulmates-wveqg",
      hackathon: "📍FileCoin HackFEVM",
      prizes: [
        "🏆 HackFEVM Finalist",
        "🏆 Filecoin — Grand Prize for Best Use",
      ],
    },

    {
      name: "DeStemr",
      description:
        "A decentralized music streaming platform built on top of Polygon.",
      href: "https://ethglobal.com/showcase/destemr-y5mw7",
      hackathon: "📍ETHGlobal San Francisco",
      prizes: [
        "9️⃣ IPFS & Filecoin — Top 9",
        "6️⃣ Covalent — Best Use of Covalent API",
      ],
    },
    {
      name: "SafeConnect",
      description:
        "A safety protocol built on top of WalletConnect to protect users from malicious dApps.",
      href: "https://ethglobal.com/showcase/",
      hackathon: "📍ETHGlobal New York City",
      prizes: ["🔴 Optimism"],
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
          <Alert
            className="cursor-pointer border-0 py-4 hover:bg-secondary dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out"
            key={project.name}
          >
            <AlertTitle className="text-xl flex items-center justify-between">
              <span>{project.name}</span>
              <div className="hidden lg:flex lg:items-center">
                {project.prizes &&
                  project.prizes.map((prize) => (
                    <Badge key={prize} className="ml-2">
                      {prize}
                    </Badge>
                  ))}
                <Badge variant="secondary" className="ml-2">
                  {project.hackathon}
                </Badge>
              </div>
            </AlertTitle>
            <AlertDescription>{project.description}</AlertDescription>
          </Alert>
        </Link>
      ))}
    </>
  );
}
