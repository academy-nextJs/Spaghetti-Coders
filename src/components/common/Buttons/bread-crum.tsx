import { CustomBreadcrumbsProps } from "@/src/types/types";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function CustomBreadcrumbs({
    items = [],
    separator = "<",
    classNames = {},
    itemClasses = {},
    ...props
}: CustomBreadcrumbsProps) {
    return (
        <Breadcrumbs
            separator={separator}
            classNames={{
                base: "flex flex-row-reverse dir-rtl gap-2 my-custom-breadcrumbs",
                separator: "text-red-500 mx-1",
                ...classNames,
            }}
            itemClasses={{
                item: "pr-2 pl-2 hover:underline",
                ...itemClasses,
            }}
            {...props}
        >
            {items.map((item, idx) => (
                <BreadcrumbItem
                    key={idx}
                    className={`${idx === items.length - 1
                            ? "text-black font-bold" 
                            : "text-gray-500"
                        }`}
                >
                    {item}
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    );
}