import { getFilteredHouses } from '@/src/app/actions/getFilteredRent';
import HouseRentGrid from '@/src/components/HouseRentPage/HouseRentGrid';
import api from '@/src/services/api';
import { HouseSearchParams } from '@/src/types/types';
import dynamic from 'next/dynamic';
import React from 'react';
const Filters = dynamic(()=>  import('@/src/components/Rent/filters'))

export default async function RentPage({searchParams}: { searchParams: Promise<HouseSearchParams> }) {
  const resolvedSearchParams = await searchParams
  const houses = await getFilteredHouses(resolvedSearchParams);
  const { data } = await api.get('/locations');
  const {data:categories} = await api.get('/categories')
  console.log(houses)

  return <>
  <Filters locations={data} categories={categories}/>
  <HouseRentGrid houses={houses}/>
  </>;
}
