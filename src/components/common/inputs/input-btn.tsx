'use client';

import { PersianInputProps } from '@/src/types/types';
import { FC } from 'react';

const CommonInput: FC<PersianInputProps> = ({
    className,
    placeholder,
    label,
    id,
    ...props
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={id} className="mb-2 text-sm font-semibold">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`font-semibold flex items-center gap-2 ${className}`}
                {...props}
                placeholder={placeholder}
            />
        </div>
    );
};

export default CommonInput;
