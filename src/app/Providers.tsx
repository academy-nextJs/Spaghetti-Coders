'use client';

import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="contents">
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <ToastProvider placement="bottom-center" />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </SessionProvider>
    </HeroUIProvider>
  );
}
