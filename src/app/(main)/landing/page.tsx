
import React from 'react';
import api from '@/src/services/api';
import CategoryCarousel from '@/src/components/HomeContainer/Category/categoryCarousel';
import HeroSection from '@/src/components/HomeContainer/HeroSection/HeroSection';

export default async function LandingPage() {
  const { data } = await api.get('/categories');
  return (
    <div>
     
    <HeroSection />
    <CategoryCarousel data={data}/>
    </div>
  );
}

