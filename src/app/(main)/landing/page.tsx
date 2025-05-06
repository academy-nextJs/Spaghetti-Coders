import React from 'react';
import api from '@/src/services/api';
import DreamSection from '@/src/components/Landing/dreamDestination/dreamSectionContainer';
import CategoryCarousel from '@/src/components/Landing/landingCategory/categoryCarousel';
import HeroSection from '@/src/components/HomeContainer/HeroSection/index';
import LandingShinyAlphaSection from '@/src/components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection';
import LandingCarousel from '@/src/components/Landing/LandingCarousel/LandingCarousel';
import LandingComments from '@/src/components/Landing/comments/commentsContainer';
import LandingDiscountedSection from '@/src/components/Landing/LandingDiscountedSection/LandingDiscountedSection';
import LandingBuySellSection from '@/src/components/Landing/LandingBuySellSection/LandingBuySellSection';

export default async function LandingPage() {
  const { data } = await api.get('/categories');
  
  return (
    <div className="w-full flex flex-col gap-20 overflow-x-hidden">
      <HeroSection />
      <div className="flex justify-end px-10"><CategoryCarousel data={data} /></div>
      <div className="mb-20 mx-10">
      <LandingDiscountedSection  />
      <LandingCarousel data={data} discountedSection={true} />
      </div>
      <div className="mb-24 mx-10"> <DreamSection /></div>
  <div className="mb-20 mr-10"> <LandingShinyAlphaSection /></div>
  <div className="mb-20 mx-10">
     <LandingBuySellSection  />
     </div>
  <div className="mb-20 mx-10">    <LandingComments /></div>
      
    </div>
  );
}
