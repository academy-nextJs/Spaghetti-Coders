import React from 'react';
import api from '@/src/services/api';
import InfiniteCarousel from '@/src/components/common/InfiniteCarousel';
import DreamSection from '@/src/components/dreamDestination/dreamSectionContainer';
import CategoryCarousel from '@/src/components/Landing/landingCategory/categoryCarousel';

export default async function LandingPage() {
  const { data } = await api.get('/categories')

  return (
    <div>
      <h1>Landing Page</h1>
      <CategoryCarousel data={data} />

      <section>
        <h2 className="text-3xl font-bold">
          نظرات مشتریان ما
        </h2>
        <InfiniteCarousel />
      </section>
      <DreamSection />
    </div>
  );
}
