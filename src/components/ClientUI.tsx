'use client';

import { Button } from '@heroui/react';
import { ReactNode } from 'react';

export function ClientButtonPurple({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Button
      className={`bg-[#7575FE] text-white font-semibold ${className}`}
      radius="full"
    >
      {children}
    </Button>
  );
}
export function ClientButtonGray({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Button
      className={`bg-[#F0F0F0] text-black font-semibold ${className}`}
      radius="full"
    >
      {children}
    </Button>
  );
}
