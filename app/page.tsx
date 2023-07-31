import Header from "@/components/header";
import IntroText from "@/components/intro-text";
import React from "react";
import Currently from "@/components/currently";
import PersonalProjects from "@/components/personal-projects";
import Hackathons from "@/components/hackathons";
import More from "@/components/more";
import Siganture from "@/components/signature";
import UIPage from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto flex flex-col max-w-7xl px-6 lg:px-8">
        <IntroText />
        <Currently />
        <UIPage />
        <PersonalProjects />
        <Hackathons />
        <More />
      </div>

      <div className="mx-auto flex flex-col max-w-7xl px-6 lg:px-8">
        <Siganture />
      </div>
    </div>
  );
}
