import React from "react";
import { InputOtp } from "@heroui/react";
import { MultiInputOtpProps } from "@/src/types/types";



export function MultiInputOtp({ value, onValueChange, length = 5, ...props }: MultiInputOtpProps) {
    return (
        <InputOtp
            length={length}
            value={value}
            onValueChange={onValueChange}
            {...props}
        />
    );
}