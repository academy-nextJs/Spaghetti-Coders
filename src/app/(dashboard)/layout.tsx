import DashboardContainer from '@/src/app/(dashboard)/dashboard';
import React from 'react';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="p-4 bg-primaryGray dark:bg-darkMode overflow-hidden"
      dir="rtl"
    >
      <DashboardContainer>{children}</DashboardContainer>
      <style scoped>{`
        body { 
          padding: 0; 
        }
      `}</style>
    </main>
  );
}
