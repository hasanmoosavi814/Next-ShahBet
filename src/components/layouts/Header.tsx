"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* لوگو و عنوان */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <Trophy className="w-6 h-6 text-green-400" />
          <span className="text-xl font-bold tracking-tight">
            Football Stats
          </span>
        </Link>

        {/* منو یا دکمه‌های اضافی */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/leagues" className="hover:text-green-400 transition">
            Leagues
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
