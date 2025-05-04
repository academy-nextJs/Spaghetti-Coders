import React from 'react';
import api from '@/src/services/api';
import DreamSection from '@/src/components/Landing/dreamDestination/dreamSectionContainer';
import CategoryCarousel from '@/src/components/Landing/landingCategory/categoryCarousel';
import HeroSection from '@/src/components/HomeContainer/HeroSection/index';
import LandingShinyAlphaSection from '@/src/components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection';
import LandingCarousel from '@/src/components/Landing/LandingCarousel/LandingCarousel';;
import LandingComments from '@/src/components/Landing/comments/commentsContainer';
import LandingDiscountedSection from '@/src/components/Landing/LandingDiscountedSection/LandingDiscountedSection';

export default async function LandingPage() {
  const { data } = await api.get('/categories');

  return (
    <div className="w-full flex flex-col gap-20 overflow-x-hidden">
      <HeroSection />
      <div className="flex justify-end"><CategoryCarousel data={data} /></div>
      <div className="mb-20">
      <LandingDiscountedSection />
      <LandingCarousel data={data} discountedSection={true} />
      </div>
      <div className="mb-24"> <DreamSection /></div>
  <div className="mb-20"> <LandingShinyAlphaSection /></div>
  <div className="mb-20">
     <LandingDiscountedSection />
    <LandingCarousel data={data} discountedSection={true} /></div>
  <div className="mb-20">    <LandingComments /></div>
      
    </div>
  );
}
