import { Button, ButtonProps } from "@heroui/react"
import React from "react"

interface MyCustomButtonProps extends ButtonProps {
    customProp?: string;
}

export const MyCustomButton: React.FC<MyCustomButtonProps> = ({
    customProp,
    children, 
    ...props
}) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}