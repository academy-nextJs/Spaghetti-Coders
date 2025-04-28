import { InputProps } from "@heroui/react";
import { ReactNode } from "react";
import { ButtonProps } from "@heroui/react";

export interface LandingCard2Props {
  text: string;
  count?: number;
  src?: string;
  href: string;
}
export interface Category {
  id: string;
  name: string;
}
export interface CarouselProps {
  children: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: {
    [width: number]: {
      slidesPerView?: number;
      spaceBetween?: number;
    };
  };
  centeredSlidesBounds?: boolean;
  centerInsufficientSlides?: boolean;
  className?: string;
  houseCarousel?: boolean;
  landingCardsCarousel?: boolean;
}

export type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export interface PersianInputProps extends Omit<InputProps, 'ref' | 'size'> {
  label?: string;
  customClass?: string;
  errorMessage?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

export type MultiInputOtpProps =  {
    value: string;
    onValueChange: (value: string) => void;
    length?: number;
}


export type MyChipProps = {
    children: React.ReactNode;
    color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
    size?: "md" | "sm" | "lg";
    className?: string; 
    [key: string]: unknown;
};


export type PersianSelectProps = {
    label?: string;
    placeholder?: string;
    options: { label: string; value: string }[];
    selectedValue?: string;
    onChange: (value: string) => void;
    className?: string;
    labelClass?: string;
}


export type ClientButtonProps = ButtonProps & {
    customProp?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};



export type UserProps = {
    name: string;
    description: string;
    avatarProps: object;
    className?: string;
}

export interface CommonCardCommentProps {
  text?: string;
  name?: string;
  date?: string;
  imageUrl?: string
}


export interface LoginBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: string;
  size?: number;
  height?: number;
width?: number;
[key: string]: unknown;

}

export interface SectionTopProps {
  mainText?: string | React.ReactNode[];
  subText?: string | React.ReactNode[];
  chipText?: string;
  children?: ReactNode;

export interface HouseCardProps {
  title: string;
  location: string;
  bathroom: number;
  bedroom: number;
  parking: number;
  yard?: boolean; 
  price: number;
  originalPrice?: number;
  rating?: number;
  discountPercentage?: number;
}