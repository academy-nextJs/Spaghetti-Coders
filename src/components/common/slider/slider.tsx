import { Slider } from "@heroui/react";

export default function CustomSlider({
    defaultValue = 0,
    minValue = 0,
    maxValue = 100,
    step = 1,
    className = "",
    ...props
}) {
    return (
        <div className={`w-[100px] ${className}`}>
            <Slider
                defaultValue={defaultValue}
                minValue={minValue}
                maxValue={maxValue}
                step={step}
                {...props}
            />
        </div>
    );
}