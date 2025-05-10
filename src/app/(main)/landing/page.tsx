import React from 'react';
import api from '@/src/services/api';
import dynamic from 'next/dynamic';

const DreamSection = dynamic(() => import('@/src/components/Landing/dreamDestination/dreamSectionContainer'));
const CategoryCarousel = dynamic(() => import('@/src/components/Landing/landingCategory/categoryCarousel'));
const HeroSection = dynamic(() => import('@/src/components/HomeContainer/HeroSection/index'));
const LandingShinyAlphaSection = dynamic(() => import('@/src/components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection'));
const LandingCarousel = dynamic(() => import('@/src/components/Landing/LandingCarousel/LandingCarousel'));
const LandingComments = dynamic(() => import('@/src/components/Landing/comments/commentsContainer'));
const LandingDiscountedSection = dynamic(() => import('@/src/components/Landing/LandingDiscountedSection/LandingDiscountedSection'));
const LandingBuySellSection = dynamic(() => import('@/src/components/Landing/LandingBuySellSection/LandingBuySellSection'));


export default async function LandingPage() {
  const { data } = await api.get('/categories');

  return (
    <div className="w-full flex flex-col gap-20 justify-ceneter">
      <HeroSection />
      <div className="flex justify-end">
        <CategoryCarousel data={data} />
      </div>
      <div className="">
        <LandingDiscountedSection />
        <LandingCarousel data={data} discountedSection={true} />
      </div>
      <div className="">
        <DreamSection />
      </div>
      <div className=" ">
        <LandingShinyAlphaSection />
      </div>
      <div className="">
        <LandingBuySellSection />
      </div>
      <div className="">
        <LandingComments />
      </div>
    </div>
  );
}
