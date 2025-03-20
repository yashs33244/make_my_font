import { Edit } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#5C818A] bg-[#FFFFFF] py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Edit className="h-6 w-6 text-[#1798C1]" />
          <span className="text-lg font-bold text-[#073742]">FontCraft</span>
        </div>
        <p className="text-center text-sm text-[#889BA0] md:text-left">
          &copy; {new Date().getFullYear()} FontCraft. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/terms"
            className="text-sm text-[#889BA0] hover:text-[#1798C1]"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-[#889BA0] hover:text-[#1798C1]"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#889BA0] hover:text-[#1798C1]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
