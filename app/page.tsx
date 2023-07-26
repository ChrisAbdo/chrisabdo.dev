import Header from "@/components/header";
import IntroText from "@/components/intro-text";
import React from "react";
import { CodeIcon } from "@radix-ui/react-icons";
import Projects from "@/components/projects";
import HackathonProjects from "@/components/hackathon-projects";
import Link from "next/link";
import Currently from "@/components/currently";
import PersonalProjects from "@/components/personal-projects";
import Hackathons from "@/components/hackathons";
import More from "@/components/more";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto flex flex-col max-w-7xl px-6 lg:px-8">
        <IntroText />
        <Currently />
        <PersonalProjects />
        <Hackathons />
        {/* <div className="mt-12 sm:mt-16">
          <h1 className="mb-2 font-display text-lg drop-shadow-sm md:text-2xl">
            More
          </h1>
          <p className="mt-1 text-muted-foreground font-display text-sm drop-shadow-sm md:text-lg">
            I&#39;m currently working on a few projects &#40;coming soon!&#41;,
            focusing on AI and design. Do not hesitate to reach out if you have
            a project in mind, or just want to say hi! You can see more of my
            work on{" "}
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
        </div> */}
        <More />
      </div>
    </div>
  );
}
