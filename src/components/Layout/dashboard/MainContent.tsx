'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function MainContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isExactDashboard = pathname === '/dashboard';

  return (
    <div
      className={`h-fit p-6 ${
        isExactDashboard ? '' : 'bg-white dark:bg-black rounded-3xl'
      }`}
    >
      {children}
    </div>
  );
}
