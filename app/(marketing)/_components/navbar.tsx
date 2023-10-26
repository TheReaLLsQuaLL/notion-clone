"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <p>Loading...</p>}
        {!isAuthenticated && !isAuthenticated && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Notion-Clone Free</Button>
            </SignInButton>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
