'use client';

import { Button, ButtonProps } from '@heroui/react';

interface ClientButtonProps extends ButtonProps {
  customProp?: string;
}

export const ClientButton: React.FC<ClientButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <Button
      className={`font-semibold ${className}`}
      {...props}
      radius="full"
    >
      {children}
    </Button>
  );
};
