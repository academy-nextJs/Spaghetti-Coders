'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation } from 'swiper/modules';

import { Button } from '@heroui/react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { CarouselProps } from '@/src/types/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon, MapPinpoint01Icon } from '@hugeicons/core-free-icons';

export default function Carousel({
  children,
  slidesPerView = 3,
  spaceBetween = 30,
  breakpoints,
  centeredSlidesBounds,
  centerInsufficientSlides,
  className,
  houseCarousel = false,
  landingCardsCarousel = false,
  locOnMap = false,
}: CarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

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
          setTotalSlides(swiper.slides.length);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          setActiveIndex(swiper.activeIndex);
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        modules={[Navigation]}
        className="mySwiper"
        // centeredSlides
        centeredSlidesBounds={centeredSlidesBounds}
        centerInsufficientSlides={centerInsufficientSlides}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {!isBeginning && !landingCardsCarousel && !locOnMap && (
        <Button
          size={isMobile ? 'md' : 'lg'}
          isIconOnly
          onPress={() => swiperRef.current?.slidePrev()}
          className={`absolute top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg hover:shadow-xl transition ${houseCarousel ? 'right-2 bg-[#F9F9F970]' : '-right-6 bg-white'}`}
        >
          {houseCarousel ? <HugeiconsIcon icon={ArrowRight01Icon} color='#fff' size={20} /> : <SlArrowRight color="black" size="1.5em" />}
        </Button>
      )}

      {!isEnd && !landingCardsCarousel && !locOnMap && (
        <Button
          isIconOnly
          size={isMobile ? 'md' : 'lg'}
          onPress={() => swiperRef.current?.slideNext()}
          className={`absolute top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg hover:shadow-xl transition ${houseCarousel ? 'left-2 bg-[#F9F9F970]' : '-left-6 bg-white'}`}
        >
          {houseCarousel ? <HugeiconsIcon icon={ArrowLeft01Icon} color='#fff' size={20} /> : <SlArrowLeft color="black" size="1.5em" />}
        </Button>
      )}

      {houseCarousel && !locOnMap ?
        <div className='absolute bottom-2 z-10 w-full flex justify-center'>
          <div className="w-7/12 flex gap-2 justify-center">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`w-16 h-2 rounded-full transition-all ${activeIndex === index ? 'bg-neutral-400' : 'bg-white hover:bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
        : null}

      {locOnMap ?
        <div className="float-end group absolute bottom-2 left-2 z-10 inline-flex items-center justify-end text-sm font-medium text-white bg-[#7575FE] rounded-full p-1.5 overflow-hidden">
          <span className='whitespace-nowrap max-w-0 group-hover:max-w-[7rem] text-[1vw] xl:group-hover:max-w-[10rem] group-hover:px-1.5 overflow-hidden transition-all duration-500 text-white'>نمایش داخل نقشه</span>
          <HugeiconsIcon icon={MapPinpoint01Icon} color='#fff' />
        </div>
        : null}
    </div>
  );
}
