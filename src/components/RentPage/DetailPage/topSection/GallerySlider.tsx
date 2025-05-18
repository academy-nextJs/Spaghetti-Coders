// components/GallerySlider.tsx
'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { Image } from '@heroui/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type GallerySliderProps = {
  allPhotos: string[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
  swiperRef:
    | React.RefObject<SwiperType>
    | React.MutableRefObject<SwiperType | null>;
  isModal?:boolean
};

const GallerySlider = ({
  allPhotos,
  activeIndex,
  onSlideChange,
  swiperRef,
}: GallerySliderProps) => {
  useEffect(() => {
    // sync index manually when updated outside swiper
    swiperRef.current?.slideTo(activeIndex);
  }, [activeIndex, swiperRef]);

  return (
    <Swiper
      pagination={{ type: 'fraction' }}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper relative"
      onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      initialSlide={activeIndex}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {allPhotos.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
            alt={`Photo ${index}`}
            className="w-screen md:h-screen md:aspect-auto aspect-square"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </SwiperSlide>
      ))}
      <div className="custom-next absolute left-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black/30 p-2 text-white hover:bg-black/50 ">
        <HugeiconsIcon icon={ArrowLeft01Icon} size={32} />
      </div>
      <div className="custom-prev absolute right-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black/30 p-2 text-white hover:bg-black/50">
        <HugeiconsIcon icon={ArrowRight01Icon} size={32} />
      </div>
    </Swiper>
  );
};

export default React.memo(GallerySlider);
