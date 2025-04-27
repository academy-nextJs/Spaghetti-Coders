'use client';

import { Button, ButtonProps } from '@heroui/react';

interface ClientButtonProps extends ButtonProps {
  customProp?: string;
  label?: string;
  svg?: React.ReactNode;
}

export const ClientButton: React.FC<ClientButtonProps> = ({
  children,
  className = '',
  label,
  svg,
  ...props
}) => {
  return (
    <Button
      className={`font-semibold ${className}`}
      {...props}
      radius="full"
    >
      {svg && <span className="mr-2">{svg}</span>} 
      {label && <span className="mr-2">{label}</span>}
      {children}
    </Button>
  );
};