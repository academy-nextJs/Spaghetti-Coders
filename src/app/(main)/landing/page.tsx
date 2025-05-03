import React from 'react';
import api from '@/src/services/api';
import DreamSection from '@/src/components/Landing/dreamDestination/dreamSectionContainer';
import CategoryCarousel from '@/src/components/Landing/landingCategory/categoryCarousel';
import HeroSection from '@/src/components/HomeContainer/HeroSection/HeroSection';
import LandingShinyAlphaSection from '@/src/components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection';
import LandingComments from '@/src/components/Landing/comments/commentsContainer';

export default async function LandingPage() {
  const { data } = await api.get('/categories');

  return (
    <div>
      <h1>Landing Page</h1>
      <HeroSection />
      <CategoryCarousel data={data} />

      <DreamSection />

      <LandingShinyAlphaSection />
      <LandingComments />
    </div>
  );
}
