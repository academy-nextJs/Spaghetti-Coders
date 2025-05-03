import { InputOtp } from "@heroui/react";

export default function OtpField(props) {
    return (
        <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-8">
            <InputOtp
                {...props}
                inputClassName="rounded-full border-gray-300 focus:border-primary focus:ring-0 text-center"
                containerClassName="flex justify-between"
            />
        </div>
    );
}
