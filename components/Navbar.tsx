"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/80 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-purple rounded-lg flex items-center justify-center group-hover:animate-glow">
              <span className="text-xl font-bold">C</span>
            </div>
            <span className="text-xl font-bold font-display">
              Catalyst<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#how-it-works"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/book"
              className="bg-primary hover:bg-primary-dark text-background px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

