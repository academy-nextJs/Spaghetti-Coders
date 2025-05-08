'use client';

import { Button, ButtonProps } from '@heroui/react';

interface ClientButtonProps extends ButtonProps {
  customProp?: string;
  label?: string;
  svg?: React.ReactNode;
  labelPosition?: 'beforeChild' | 'afterChild';
  svgClassName?: string;
  spanBeforeClassName?: string;
}

export const ClientButton: React.FC<ClientButtonProps> = ({
  children,
  className = '',
  label,
  svg,
  labelPosition = 'beforeChild',
  svgClassName = 'mr-2',
  spanBeforeClassName = 'mr-2',
  ...props
}) => {
  return (
    <Button
      className={`font-semibold ${className}`}
      {...props}
      radius="full"
    >
      {svg && <span className={svgClassName}>{svg}</span>} 
      {label && labelPosition === 'beforeChild' && <span className={spanBeforeClassName}>{label}</span>}
      {children}
      {label && labelPosition === 'afterChild' && <span className="mr-1">{label}</span>}
    </Button>
  );
};