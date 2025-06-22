"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-xl sticky top-0 z-50">
      <div className="container flex items-center justify-between py-5">
        <div className="text-3xl font-extrabold tracking-wider">HR Dashboard</div>
        <div className="hidden md:flex space-x-12">
          <Link href="/" className="hover:text-indigo-400">
            Dashboard
          </Link>
          <Link href="/bookmarks" className="hover:text-indigo-400">
            Bookmarks
          </Link>
          <Link href="/analytics" className="hover:text-indigo-400">
            Analytics
          </Link>
        </div>
      </div>
    </nav>
  );
}
