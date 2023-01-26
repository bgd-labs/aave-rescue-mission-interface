// info(): not used component

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import { Button } from './Button';

type Mode = 'light' | 'dark';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const prefersDarkMode =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    const initialMode = localStorage?.getItem('theme') as Mode;
    if (initialMode) {
      setTheme(initialMode);
    } else if (prefersDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <Button size="small" onClick={toggleTheme}>
      Change theme
    </Button>
  );
}
