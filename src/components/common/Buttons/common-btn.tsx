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
    ...props
}) => {
    return (
        <Button
            className={`font-semibold flex items-center gap-2 ${className}`}
            radius="full"
            {...props}
        >
            {children}
        </Button>
    );
};
