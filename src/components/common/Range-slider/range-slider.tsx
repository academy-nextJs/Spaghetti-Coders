import { Slider } from "@heroui/react";

type CustomSliderProps = {
    value?: number;
    onChange?: (value: number) => void;
    className?: string;
} & React.ComponentPropsWithoutRef<"input">; 

export default function CustomSlider(props: CustomSliderProps) {
    return (
        <Slider
            className="max-w-md"
            {...props}
        />
    );
}