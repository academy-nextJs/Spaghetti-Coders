'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon02Icon, Sun01Icon } from 'hugeicons-react';
import { Switch } from '@heroui/react';

export function ThemeSwitcher({ isMobile = false }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div>
      {isMobile ? (
        <Switch
          checked={isDark}
          onChange={handleToggle}
          size="lg"
          color='secondary'
          startContent={<Sun01Icon />}
          endContent={<Moon02Icon />}
        >
          حالت شب
        </Switch>
      ) : (
        <button
          className={`p-2.5 rounded-full cursor-pointer border-1.5 ${
            isDark ? 'border-white' : 'border-black'
          }`}
          onClick={handleToggle}
        >
          {isDark ? <Sun01Icon /> : <Moon02Icon />}
        </button>
      )}
    </div>
  );
}