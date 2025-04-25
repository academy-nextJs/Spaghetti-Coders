'use client';

import { Select, SelectItem } from '@heroui/react';
import { FC } from 'react';

interface PersianSelectProps {
    label?: string;
    placeholder?: string;
    options: { label: string; value: string }[];
    selectedValue?: string;
    onChange: (value: string) => void;
    className?: string;
    labelClass?: string;
}

const PersianSelect: FC<PersianSelectProps> = ({
    label,
    placeholder,
    options,
    selectedValue,
    onChange,
    className,
    labelClass,
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className={`mb-2 text-sm font-semibold ${labelClass}`}>
                    {label}
                </label>
            )}
            <Select
                value={selectedValue}
                onChange={(event) => onChange(event.target.value)}
                className={`font-semibold radius-full p-2 bg-[#F0F0F0] ${className}`}
                placeholder={placeholder}
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
        </div>
    );
};

export default PersianSelect;
