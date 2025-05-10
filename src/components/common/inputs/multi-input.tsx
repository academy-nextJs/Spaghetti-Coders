import { InputOtp, InputOtpProps } from "@heroui/react";

export default function OtpField(props: InputOtpProps) {
    return (
        <InputOtp
            inputClassName="rounded-full border-gray-300 focus:border-primary focus:ring-0 text-center"
            containerClassName="block w-full"
            classNames={{
                segmentWrapper: 'flex justify-between',
                base: 'w-full',
                segment: ["relative", "w-16", "h-16", "rounded-3xl", "text-2xl", "font-bold"],
                errorMessage: 'text-right'
            }}
            {...props}
        />
    );
}
