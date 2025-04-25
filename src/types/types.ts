import { ReactNode } from "react";

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
  className?: string;
}
