import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

function SocialLinks() {
  let links = [
    {
      name: "Twitter",
      href: "/",
      icon: <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" />,
    },
    {
      name: "GitHub",
      href: "/",
      icon: <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />,
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Button key={link.name} variant="ghost" size="icon">
          {link.icon}
        </Button>
      ))}
    </>
  );
}

export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex gap-x-0.5">
          <SocialLinks />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
