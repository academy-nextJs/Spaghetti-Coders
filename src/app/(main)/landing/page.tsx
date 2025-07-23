import React from 'react';
import api from '@/src/services/interceptors/server';
import dynamic from 'next/dynamic';
import CategoryCarousel from '@/src/components/Landing/landingCategory/categoryCarousel';
import HeroSection from '@/src/components/Landing/HeroSection';

const DreamSection = dynamic(
  () =>
    import('@/src/components/Landing/dreamDestination/dreamSectionContainer')
);

const LandingShinyAlphaSection = dynamic(
  () =>
    import(
      '@/src/components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection'
    )
);
const LandingComments = dynamic(
  () => import('@/src/components/Landing/comments/commentsContainer')
);
const LandingDiscountedSection = dynamic(
  () =>
    import(
      '@/src/components/Landing/LandingDiscountedSection/LandingDiscountedSection'
    )
);
const LandingBuySellSection = dynamic(
  () =>
    import(
      '@/src/components/Landing/LandingBuySellSection/LandingBuySellSection'
    )
);

export default async function LandingPage() {
  const { data } = await api.get('/categories');
  return (
    <div className="w-full flex flex-col gap-20 justify-center">
      <HeroSection />
      <div className="flex items-center w-full justify-between">
        <div className="circle scale-125 -mr-36" />
        <CategoryCarousel data={data.data} />
      </div>
      <LandingDiscountedSection />
      <DreamSection />
      <LandingShinyAlphaSection />
      <LandingBuySellSection />
      <LandingComments />
    </div>
  );
}
