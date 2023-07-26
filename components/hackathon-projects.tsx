"use client";

import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "./ui/badge";

export default function HackathonProjects() {
  let projects = [
    {
      name: "Soul Mates",
      description:
        "A soulbound token (SBT) issuance engine, built on FEVM (FileCoin Virtual Machine).",
      href: "/",
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
      href: "/",
      hackathon: "📍ETHGlobal HackFS",
      prizes: [
        "9️⃣ IPFS & Filecoin — Top 9",
        "6️⃣ Covalent — Best Use of Covalent API",
      ],
      tweetId: "1651827351636922374",
    },
    {
      name: "SafeConnect",
      description:
        "A safety protocol built on top of WalletConnect to protect users from malicious dApps.",
      href: "/",
      hackathon: "📍ETHGlobal ETHNYC",
      prizes: ["🔴 Optimism — Top 20"],
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <Alert
          className="cursor-pointer border-0 py-4 hover:bg-secondary dark:hover:bg-zinc-900 transition-all duration-200 ease-in-out"
          key={project.name}
        >
          <AlertTitle className="text-xl flex items-center justify-between">
            <span>{project.name}</span>
            <div className="hidden lg:flex lg:items-center">
              <Badge variant="secondary" className="ml-2">
                {project.hackathon}
              </Badge>
              {project.prizes &&
                project.prizes.map((prize) => (
                  <Badge key={prize} className="ml-2">
                    {prize}
                  </Badge>
                ))}
            </div>
          </AlertTitle>
          <AlertDescription>{project.description}</AlertDescription>
        </Alert>
      ))}
    </>
  );
}
