'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { User } from '@heroui/react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

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


    const circleRef = useRef<SVGCircleElement>(null);
    const radius = 20;
    const circumference = 2 * Math.PI * radius;



    return (
        <div className="w-full h-full relative rounded-3xl overflow-hidden group">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onAutoplayTimeLeft={(swiper, time, progress) => {
                    const offset = circumference - (progress) * circumference;
                    if (circleRef.current) {
                        circleRef.current.style.strokeDashoffset = `${offset}`;
                    }
                }}
                loop
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

            <div className="absolute bottom-6 left-6 flex gap-4 z-10 justify-center items-center">
                <svg width="45" height="45" className='-rotate-90'>
                    <circle
                        stroke="#ccc"
                        fill="transparent"
                        strokeWidth="3"
                        r={radius}
                        cx="22"
                        cy="22"
                    />
                    <circle
                        ref={circleRef}
                        stroke="#6c63ff"
                        fill="transparent"
                        strokeWidth="3"
                        r={radius}
                        cx="22"
                        cy="22"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="custom-prev w-[56px] h-[56px] cursor-pointer rounded-full bg-[#F9F9F963] flex justify-center items-center">
                    <HugeiconsIcon icon={ArrowRight01Icon} color='#fff'/>
                </div>
                <div className="custom-next w-[56px] h-[56px] cursor-pointer rounded-full bg-[#F9F9F963] flex justify-center items-center">
                    <HugeiconsIcon icon={ArrowLeft01Icon} color='#fff'/>
                </div>
            </div>
        </div>
    );
};

export default SwiperSlider;