'use client'

import { User, UserProps } from "@heroui/react";

export function ClientUser({ ...props }: UserProps) {
  return (
    <User
      {...props}
    />
  );
}