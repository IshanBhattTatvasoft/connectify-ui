"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-border dark:border-darkBorder hover:bg-primary/10 transition"
      title="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-textDark" />
      ) : (
        <Sun className="w-5 h-5 text-darkText" />
      )}
    </button>
  );
};
