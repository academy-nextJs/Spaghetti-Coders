import React from 'react';
import api from '@/src/services/api';
import CategoryCarousel from '@/src/components/landingCategory/categoryCarousel';

export default async function LandingPage() {
  const { data } = await api.get('/categories');

  return (
    <div>
      <h1>Landing Page</h1>
      <CategoryCarousel data={data} />
    </div>
  );
}
