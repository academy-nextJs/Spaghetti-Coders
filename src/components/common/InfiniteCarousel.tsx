'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import CommonCardComment from './commonCardComment';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles.module.css';
import { Button } from '@heroui/react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
const testimonials = [
  {
    text: 'خدمات عالی و رضایت بخش',
    name: 'علی محمدی',
    date: '۱۲ فروردین ۱۴۰۲',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    text: 'تجربه فوق العاده از اقامت',
    name: 'سارا احمدی',
    date: '۱۵ فروردین ۱۴۰۲',
    imageUrl: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
  },
  {
    text: 'بهترین انتخاب برای اقامت',
    name: 'رضا کریمی',
    date: '۲۰ فروردین ۱۴۰۲',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    text: 'قیمت مناسب و خدمات عالی',
    name: 'مریم حسینی',
    date: '۲۵ فروردین ۱۴۰۲',
    imageUrl: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  },
  {
    text: 'پشتیبانی ۲۴ ساعته عالی',
    name: 'امیر رضایی',
    date: '۳۰ فروردین ۱۴۰۲',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  // Add more testimonials for smooth infinite scrolling
  {
    text: 'مکان های زیبا و دیدنی',
    name: 'نیما اکبری',
    date: '۵ اردیبهشت ۱۴۰۲',
    imageUrl: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
  },
];

export default function InfiniteCarousel() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="relative mt-5 w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          swiper.slides.forEach((slide, index) => {
            const slideEl = slide as HTMLElement;
            const diff = index - swiper.activeIndex;
            slideEl.style.transition = 'transform 0.3s';
            if (diff === 0) {
              slideEl.style.transform = 'scale(1)';
              slideEl.style.zIndex = '3';
            } else if (diff === 1) {
              slideEl.style.transform = 'scale(0.8) translateX( -80px)';
              slideEl.style.zIndex = '2';
            } else if (diff === -1) {
              slideEl.style.transform = 'scale(0.8) translateX( 80px)';
              slideEl.style.zIndex = '2';
            } else if (diff === 2) {
              slideEl.style.transform = 'scale(0.6) translateX( -80px)';
              slideEl.style.zIndex = '1';
            } else if (diff === -2) {
              slideEl.style.transform = 'scale(0.6) translateX( 80px)';
              slideEl.style.zIndex = '1';
            } else {
              slideEl.style.transform = 'scale(0.5)';
              slideEl.style.zIndex = '0';
            }
          });
        }}
        centeredSlides={true}
        loop={true}
        initialSlide={2}
        className={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 10, // reduced from 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20, // reduced from 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30, // reduced from 30
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 90, // reduced from 60
          },
        }}
      >
        {testimonials.map((testimonial, index) => {
          const diff = index - activeIndex;
          const isHidden = diff === 2 || diff === -2;

          return (
            <SwiperSlide key={index} className={styles.slide}>
              <CommonCardComment
                text={testimonial.text}
                name={testimonial.name}
                date={testimonial.date}
                imageUrl={testimonial.imageUrl}
                isActive={index === activeIndex}
                isHidden={isHidden}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Button
        size={isMobile ? 'md' : 'lg'}
        isIconOnly
        onPress={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 -translate-y-1/2 md:right-[10%] -right-2 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition"
      >
        <SlArrowRight color="black" size="1.5em" />
      </Button>
      <Button
        isIconOnly
        size={isMobile ? 'md' : 'lg'}
        onPress={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 -translate-y-1/2 md:left-[10%] -left-2 z-10 bg-white rounded-full shadow-lg hover:shadow-xl transition "
      >
        <SlArrowLeft color="black" size="1.5em" />
      </Button>
    </div>
  );
}
