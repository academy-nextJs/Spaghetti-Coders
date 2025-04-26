import { MyChipProps } from "@/src/types/types";
import { Chip } from "@heroui/react";


export function MyChip({ children, size = "md", className, ...props }: MyChipProps) {
    return (
        <Chip size={size} className={`h-10 ${className}`}  {...props}>
            {children}
        </Chip>
    );
}