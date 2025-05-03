'use client';

import { PersianSelectProps } from '@/src/types/types';
import { Select, SelectItem } from '@heroui/react';
import { FC } from 'react';



const PersianSelect: FC<PersianSelectProps> = ({
    label,
    placeholder,
    options,
    selectedValue,
    onChange,
    className,
    size
}) => {
    return (
        <>
            <Select
                label={label}
                value={selectedValue}
                onChange={(event) => onChange(event.target.value)}
                className={`font-semibold ${className}`}
                radius='full'
                placeholder={placeholder}
                size={size}
            >
                {options.map((option) => (
                    <SelectItem
                        key={option.value}
                        data-value={option.value}
                        className="rounded-full"
                    >
                        {option.label}
                    </SelectItem>
                ))}
            </Select>
        </>
    );
};

export default PersianSelect;
