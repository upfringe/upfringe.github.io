"use client";

import { FaSun, FaMoon } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="mr-4 border-2 border-accentDark rounded-lg p-2" 
      title={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === "light" ? <FaMoon size="1.4em" /> : <FaSun size="1.4em"/>}
    </button>
  );
}
