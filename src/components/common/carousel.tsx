'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '@heroui/react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { CarouselProps } from '@/src/types/types';

export default function Carousel({
  children,
  slidesPerView = 3,
  spaceBetween = 30,
  className,
}: CarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={'relative ' + className}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: slidesPerView-2,
          },
          768: {
            slidesPerView: slidesPerView-1,
          },
          1280: {
            slidesPerView: slidesPerView,
          },
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {!isBeginning && (
        <Button
          size={isMobile? 'md': 'lg'}
          isIconOnly
          onPress={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition"
        >
          <SlArrowRight color="black" size="1.5em" />
        </Button>
      )}

      {!isEnd && (
        <Button
          isIconOnly
          size={isMobile? 'md': 'lg'}
          onPress={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 -translate-y-1/2 -left-6 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition "
        >
          <SlArrowLeft color="black" size="1.5em" />
        </Button>
      )}
    </div>
  );
}
