"use client";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="border-b border-border dark:border-darkBorder bg-white dark:bg-darkBackground">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Connectify</h1>
        <div className="flex items-center gap-4">
          <button className="text-sm text-textLight dark:text-darkText hover:text-primary">
            Login
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition">
            Sign Up
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
