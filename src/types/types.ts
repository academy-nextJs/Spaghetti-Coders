import { InputProps } from '@heroui/react';
import { ReactNode } from 'react';
import { ButtonProps } from '@heroui/react';

export interface LandingCard2Props {
  text: string;
  count?: number;
  src?: string;
  href: string;
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
  locOnMap?: boolean;
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

export type MultiInputOtpProps = {
  value: string;
  onValueChange: (value: string) => void;
  length?: number;
};

export type MyChipProps = {
  children: React.ReactNode;
  color?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  size?: 'md' | 'sm' | 'lg';
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
  size: 'sm' | 'md' | 'lg' | undefined;
};

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
};

export interface LandingCard2Props {
  text: string;
  count?: number;
  src?: string;
  href: string;
  name?: string;
  description?: string;
  avatarProps?: object;
  className?: string;
}

export interface CommonCardCommentProps {
  text?: string;
  name?: string;
  date?: string;
  imageUrl?: string;
  isActive?: boolean;
  isHidden?: boolean;
}

export interface LoginBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}
export interface HouseCardProps {
  title: string;
  address: string;
  bathroom?: number;
  bedroom?: number;
  parking?: number;
  capacity?: number;
  yardType?: string;
  yard?: boolean;
  price: number;
  originalPrice?: number;
  rating?: number;
  discountPercentage?: number;
  photos: string[];
  nights?: number;
  locOnMap?: boolean;
}

export interface LandingCarouselProps {
  data: ApartmentDataType[];
  discountedSection?: boolean;
}

export interface HouseRentCardProps {
  title: string;
  address: string;
  bathroom?: number;
  bedroom?: number;
  parking?: number;
  capacity?: number;
  yardType?: string; 
  price: string;
  photo: string;
  rate: string
}

// API Types Below👇

export interface Category {
  id: string;
  name: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface ApartmentDataType {
  id: string;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  price: string;
  tags: string[];
  last_updated: string;
  capacity: number;
  location: Location;
  categories: Category;
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  transaction_type: string;
  sellerId: string;
  sellerName: string;
  caption: string | null;
}
export type HouseSearchParams = {
  page?: string;
  limit?: string;
  sort?: 'price' | 'area' | 'rent' | 'mortgage';
  order?: 'ASC' | 'DESC';
  search?: string;
  location?: string;
  propertyType?: string;
  transactionType?: string;
  minPrice?: string;
  maxPrice?: string;
  minRent?: string;
  maxRent?: string;
  minMortgage?: string;
  maxMortgage?: string;
  minArea?: string;
  maxArea?: string;
};
export interface LocationType {
  id: string;
  area_name: string;
  lat: string;
  lng: string;
}
export interface RentFiltersProps {
  locations: LocationType[];
  categories: Category[];
}

export type QueryValues = {
  search: string;
  location: string;
  category: string;
  order: string;
  propertyType: string;
  maxPrice: string;
  minRent: string;
  maxRent: string;
  transactionType: string;
};



export interface City {
  key: string;
  label: string;
}
export interface ReserveContainerProps{
  locations: LocationType[];
  reserveData?: ApartmentDataType[]
}
export interface ReserveInitialValProps extends Omit<
    QueryValues,
    | 'search'
    | 'category'
    | 'propertyType'
    | 'minRent'
    | 'maxRent'
    | 'transactionType'
> {
    sort: string;
    rate: string;
    minPrice:string;
}