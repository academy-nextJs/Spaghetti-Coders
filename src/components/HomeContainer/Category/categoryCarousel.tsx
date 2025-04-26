import React from 'react';
import Carousel from '../../common/carousel';
import LandingCard2 from '../../common/landingCard2';
import { Category } from '@/src/types/types';
import CategoryHelpText from './categoryHelpText';

export default function CategoryCarousel({ data }: { data: Category[] }) {
  return (
    <div className="relative w-full">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/4 w-1/4 bg-gradient-to-r from-blue-200 to-transparent opacity-70 blur-3xl rounded-full z-0"></div>
      <div className="w-4/5 float-left flex flex-col gap-6 relative z-10">
        <CategoryHelpText />
        <Carousel className="mt-4">
          {data.map((item) => (
            <LandingCard2
              key={item.id}
              href={`houses/${item.id}`}
              text={item.name}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}