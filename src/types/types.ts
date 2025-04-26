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