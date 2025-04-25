import { DatePicker } from "@heroui/react";

export default function Calender() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 rounded-full">
            <DatePicker
                className="max-w-[320px] rounded-full"
            />
        </div>
    );
}

