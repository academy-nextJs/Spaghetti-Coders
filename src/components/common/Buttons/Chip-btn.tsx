import { Chip } from "@heroui/react";

type MyChipProps = {
    children: React.ReactNode;
    color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
    size?: "md" | "sm" | "lg";
    className?: string; 
    [key: string]: unknown;
};

export function MyChip({ children, size = "md", className, ...props }: MyChipProps) {
    return (
        <Chip size={size} className={`h-10 ${className}`}  {...props}>
            {children}
        </Chip>
    );
}