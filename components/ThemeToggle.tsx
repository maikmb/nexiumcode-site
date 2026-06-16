"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/70 transition-all hover:border-ocean-400/40 hover:bg-ocean-500/10 hover:text-ocean-300"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
