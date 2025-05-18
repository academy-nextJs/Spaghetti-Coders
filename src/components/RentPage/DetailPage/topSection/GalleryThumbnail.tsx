'use client';
import React, { useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Image } from '@heroui/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

type GalleryThumbnailProp = {
  allPhotos: string[];
};
export default function GalleryThumbnail({ allPhotos }: GalleryThumbnailProp) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div>
      <div className="w-4/5 m-auto">
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper relative"
          onSlideChange={handleSlideChange}
          initialSlide={activeIndex}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {allPhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              <Image src={photo} alt="" className="w-screen md:h-screen md:aspect-auto aspect-square" />
            </SwiperSlide>
          ))}
          <div className="custom-next absolute left-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black/30 p-2 text-white hover:bg-black/50 ">
            <HugeiconsIcon icon={ArrowLeft01Icon} size={32} /> 
          </div>
          <div className="custom-prev absolute right-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black/30 p-2 text-white hover:bg-black/50">
            <HugeiconsIcon icon={ArrowRight01Icon} size={32} /> 
          </div>
        </Swiper>
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 mt-4">
          {allPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`cursor-pointer border-2 rounded-large overflow-hidden ${
                index === activeIndex ? 'border-[#7575EF]' : 'border-transparent'
              }`}
            >
              <Image
                src={photo}
                alt={`Thumb ${index}`}
                className=" aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
