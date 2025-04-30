'use client';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);

    if (!savedTheme) {
      localStorage.setItem('theme', 'dark'); // default
    }

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
