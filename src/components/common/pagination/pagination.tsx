"use client";

import { CustomPaginationProps } from "@/src/types/types";
import { Pagination, PaginationItemType, PaginationItemRenderProps } from "@heroui/react";
import React from "react";



export const ChevronIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M15.5 19l-7-7 7-7"
            stroke="#7575FE"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
    </svg>
);

export const CustomPagination: React.FC<CustomPaginationProps> = ({
    className = "",
    total = 25,
    initialPage = 1,
    radius = "full",
    variant = "light",
    showControls = true,
    disableCursorAnimation = true,
    renderItem: customRenderItem,
    ...props
}) => {
    const renderItem = customRenderItem
        ? customRenderItem
        : ({
            ref,
            key,
            value,
            isActive,
            onNext,
            onPrevious,
            setPage,
            className: itemClass,
        }: PaginationItemRenderProps) => {
            if (value === PaginationItemType.NEXT) {
                return (
                    <button
                        key={key}
                        className={`${itemClass} border-1 border-[#7575FE] bg-default-200/50 min-w-8 w-8 h-8`}
                        onClick={onNext}
                    >
                        <ChevronIcon />
                    </button>
                );
            }
            if (value === PaginationItemType.PREV) {
                return (
                    <button
                        key={key}
                        className={`${itemClass} border-1 border-[#7575FE] bg-default-200/50 min-w-8 w-8 h-8`}
                        onClick={onPrevious}
                    >
                        <ChevronIcon className="rotate-180" />
                    </button>
                );
            }
            if (value === PaginationItemType.DOTS) {
                return (
                    <button key={key} className={itemClass}>
                        ...
                    </button>
                );
            }
            return (
                <button
                    key={key}
                    ref={ref}
                    className={`${itemClass} ${isActive ? "text-white bg-gradient-to-br from-[#7575FE] to-[#7575FE] font-bold" : ""
                        }`}
                    onClick={() => setPage(value)}
                >
                    {value}
                </button>
            );
        };

    return (
        <Pagination
            className={className}
            total={total}
            initialPage={initialPage}
            radius={radius}
            variant={variant}
            showControls={showControls}
            disableCursorAnimation={disableCursorAnimation}
            renderItem={renderItem}
            {...props}
        />
    );
};

export default CustomPagination;