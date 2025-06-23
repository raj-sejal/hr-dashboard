"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-3xl font-extrabold tracking-wide">HR Dashboard</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">
            Dashboard
          </Link>
          <Link href="/bookmarks" className="hover:text-yellow-300 transition duration-300">
            Bookmarks
          </Link>
          <Link href="/analytics" className="hover:text-yellow-300 transition duration-300">
            Analytics
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-center py-4 space-y-4 text-lg font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">
            Dashboard
          </Link>
          <Link href="/bookmarks" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">
            Bookmarks
          </Link>
          <Link href="/analytics" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">
            Analytics
          </Link>
        </div>
      )}
    </nav>
  );
}
