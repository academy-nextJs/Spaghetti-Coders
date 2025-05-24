'use client';

import { Button, ButtonProps } from '@heroui/react';
import { ReactNode } from 'react';

interface ClientButtonProps extends ButtonProps {
  customProp?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export const ClientButton: React.FC<ClientButtonProps> = ({
  children,
  className = '',
  startContent,
  endContent,
  ...props
}) => {
  return (
    <Button
      className={`font-semibold flex items-center gap-2 ${className}`}
      radius="full"
      {...props}
    >
      {startContent && (
        <span className="flex items-center">{startContent}</span>
      )}
      {children}
      {endContent && <span className="flex items-center">{endContent}</span>}
    </Button>
  );
};
