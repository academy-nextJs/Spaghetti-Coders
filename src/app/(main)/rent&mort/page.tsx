import HouseRentGrid from '@/src/components/RentPage/HouseRentGrid';
import api from '@/src/services/api';
import { HouseSearchParams } from '@/src/types/types';
import dynamic from 'next/dynamic';
import React from 'react';
import { getRentMortData } from '@/src/lib/getRentMortData';
const Filters = dynamic(() => import('@/src/components/RentPage/filters'))

export default async function RentPage({ searchParams }: { searchParams: Promise<HouseSearchParams> }) {
  const resolvedSearchParams = await searchParams
  const houses = await getRentMortData(resolvedSearchParams);
  const { data } = await api.get('/locations');
  const { data: categories } = await api.get('/categories')

  return <>
    <Filters locations={data} categories={categories} />
    <HouseRentGrid houses={houses} />
  </>;
}
