import React from 'react';
import api from '@/src/services/api';
import CategoryCarousel from '@/src/components/landingCategory/categoryCarousel';
import InfiniteCarousel from '@/src/components/common/InfiniteCarousel';

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
    </div>
  );
}
