'use client';

import { Button, ButtonProps } from '@heroui/react';

interface ClientButtonProps extends ButtonProps {
  customProp?: string;
  label?: string;
  svg?: React.ReactNode;
  labelPosition?: 'beforeChild' | 'afterChild';
}

export const ClientButton: React.FC<ClientButtonProps> = ({
  children,
  className = '',
  label,
  svg,
  labelPosition = 'beforeChild',
  ...props
}) => {
  return (
    <Button
      className={`font-semibold ${className}`}
      {...props}
      radius="full"
    >
      {svg && <span className="mr-2">{svg}</span>} 
      {label && labelPosition === 'beforeChild' && <span className="mr-2">{label}</span>}
      {children}
      {label && labelPosition === 'afterChild' && <span className="mr-1">{label}</span>}
    </Button>
  );
};