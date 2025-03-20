"use client";

import type React from "react";
import Link from "next/link";
import { ArrowLeft, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#5C818A] bg-[#FFFFFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FFFFFF]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Edit className="h-6 w-6 text-[#1798C1]" />
            <span className="text-xl font-bold text-[#073742]">FontCraft</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-[#073742]">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
