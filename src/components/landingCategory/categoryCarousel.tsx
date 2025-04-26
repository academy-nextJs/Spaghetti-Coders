import React from 'react';
import Carousel from '../common/carousel';
import LandingCard2 from '../common/landingCard2';
import { Category } from '@/src/types/types';
import CategoryHelpText from './categoryHelpText';

export default function CategoryCarousel({ data }: { data: Category[] }) {
  return (
    <div className="w-4/5 flex flex-col gap-6">
      <CategoryHelpText/>
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
  );
}
