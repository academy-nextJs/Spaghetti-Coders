'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { User } from '@heroui/react';
import { SvgLeftSlider, SvgRightSlider } from '@/src/assets/svgs';
import { MyCircularProgress } from '../Buttons/loading-btn';

const SwiperSlider = () => {
    const slides = [
        {
            id: 1,
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
            author: ' غنچه عطایی',
            date: '۱۳ مرداد ۱۴۰۲',
            image: '/loginPic.png',
        },
        {
            id: 2,
            text: 'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
            author: ' شایان نوری',
            date: '۱۵ مرداد ۱۴۰۲',
            image: '/loginPic.png',
        },
        {
            id: 3,
            text: 'برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
            author: ' پویا کوهپایی',
            date: '۱۸ مرداد ۱۴۰۲',
            image: '/loginPic.png',
        },
    ];

    return (
        <div className="w-full h-[695px] relative rounded-3xl overflow-hidden group">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                dir="rtl"
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full">
                            <Image
                                src={slide.image}
                                alt="slider image"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute bottom-7 right-10 text-white">
                                <p className="text-lg mb-4">{slide.text}</p>
                                <User
                                    name={slide.author}
                                    description={slide.date}
                                    className="text-white"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-6 left-6 flex gap-2 z-10">
                <div className=' pt-3 pr-2 '>
                    <MyCircularProgress />
                </div>
                <div className="custom-prev w-[56px] h-[56px] ml-8 cursor-pointer">
                    <SvgRightSlider />
                </div>
                <div className="custom-next w-[56px] h-[56px] mt-1 cursor-pointer rotate-180">
                    <SvgLeftSlider />
                </div>
            </div>
        </div>
    );
};

export default SwiperSlider;