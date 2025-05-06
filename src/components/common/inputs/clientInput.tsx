'use client';
import { Input, InputProps } from '@heroui/react';
import React from 'react';

export function ClientInput({ ...props }: InputProps) {
  return (
    <Input
    radius="full"
    size="lg"
    classNames={{
        inputWrapper: [
            'bg-[#F9F9F9]',
            'hover:bg-default-200/70',
            'focus-within:bg-default-200',
            'shadow-none',
            'dark:bg-[#57534d]',
        ],
    }}
    {...props}
    />
  );
}
