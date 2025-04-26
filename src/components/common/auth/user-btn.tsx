import { User, UserProps } from "@heroui/react";

export function Users({ name, description, avatarProps, ...props }: UserProps) {
    return (
        <User
            name={name}
            description={description}
            avatarProps={avatarProps}
            {...props}
        />
    );
}