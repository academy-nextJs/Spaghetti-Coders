
'use client';

import { Button, ButtonProps } from '@heroui/react';
import { ReactNode } from 'react';

interface ClientButtonProps extends ButtonProps {
    customProp?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export const ClientButton: React.FC<ClientButtonProps> = ({
    children,
    className = '',
    startIcon,
    endIcon,
    ...props
}) => {
    return (
        <Button
            className={`font-semibold flex items-center gap-2 ${className}`}
            {...props}
            radius="full"
        >
            {startIcon && <span className="flex items-center">{startIcon}</span>}
            {children}
            {endIcon && <span className="flex items-center">{endIcon}</span>}
        </Button>
    );
};
