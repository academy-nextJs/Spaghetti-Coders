import React from 'react';
import Carousel from '../../common/carousel';
import LandingCard2 from '../../common/landingCard2';
import { Category } from '@/src/types/types';
import { SectionTop } from '../../common/sectionTop';

export default function CategoryCarousel({ data }: { data: Category[] }) {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="w-4/5 flex flex-col gap-6">
      <SectionTop
        mainText={['هر ملکی بخوای\n اینجا پیدا میشه!']} // Still supports string with \n
        subText={[
          'با کلیک به روی هر دسته بندی می توانید تمام آگهی \nمربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید',
        ]}
        chipText="دسته بندی"
      />
      <Carousel className="mt-4" breakpoints={breakpoints}>
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
