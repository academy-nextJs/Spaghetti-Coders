import React from 'react';
import Carousel from '../common/carousel';
import LandingCard2 from '../common/landingCard2';
import { Category } from '@/src/types/types';

export default function CategoryCarousel({ data }: { data: Category[] }) {
  return (
    <div className="w-4/5 mr-28 flex flex-col gap-6">
      <p className="text-3xl font-bold">
        هر ملکی بخوای
        <br />
        اینجا پیدا میشه!
      </p>
      <p className="text-[#555555]">
        با کلیک به روی هر دسته بندی می توانید تمام آگهی
        <br />
        مربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید
      </p>
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
