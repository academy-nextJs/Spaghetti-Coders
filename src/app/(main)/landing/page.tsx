import React from 'react';
import api from '@/src/services/api';
import InfiniteCarousel from '@/src/components/common/InfiniteCarousel';
import DreamSection from '@/src/components/dreamDestination/dreamSectionContainer';
import CategoryCarousel from '@/src/components/landingCategory/categoryCarousel';
import { SectionTop } from '@/src/components/common/sectionTop';
import HeroSection from '@/src/components/HomeContainer/HeroSection/HeroSection';
import LandingShinyAlphaSection from '@/src/components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection';


export default async function LandingPage() {
  const { data } = await api.get('/categories');

  return (
    <div>
      <h1>Landing Page</h1>
      <HeroSection />
      <CategoryCarousel data={data} />

      <DreamSection />
      <section>
        <SectionTop
          mainText={['نظرات کاربران درباره آلفا']} // Still supports string with \n
          subText={[
            'تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های\n املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .',
          ]}
        />
        <InfiniteCarousel />
        <LandingShinyAlphaSection />
      </section>
    </div>
  );
}
