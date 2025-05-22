// app/providers.tsx
'use client';

import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="contents">
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ToastProvider placement="bottom-center" />
          {children}
        </ThemeProvider>
      </SessionProvider>
    </HeroUIProvider>
  );
}
