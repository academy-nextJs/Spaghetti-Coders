import React, { forwardRef } from "react";

interface MultiInputOtpProps {
    label: string;
    type: string;
    maxLength: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    className: string;
}

const MultiInputOtp = forwardRef<HTMLInputElement, MultiInputOtpProps>(
    ({ label, type, maxLength, value, onChange, onKeyDown, className }, ref) => {
        return (
            <div>
                <input
                    type={type}
                    maxLength={maxLength}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    className={className}
                    ref={ref}
                    aria-label={label}
                />
            </div>
        );
    }
);

// اضافه کردن displayName برای دیباگ بهتر
MultiInputOtp.displayName = "MultiInputOtp";

export default MultiInputOtp;