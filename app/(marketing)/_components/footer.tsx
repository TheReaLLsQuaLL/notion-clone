import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background <-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Services
        </Button>
      </div>
    </div>
  );
}
