import { HouseSearchParams } from '@/src/types/types';
import dynamic from 'next/dynamic';
import { getRentMortData } from '@/src/lib/getRentMortData';
import Loading from '@/src/components/common/Loading/LoadingSpinner';
import Filters from '@/src/components/RentPage/filters';
const HouseRentGrid = dynamic(
  () => import('@/src/components/RentPage/HouseRentGrid'),
  { loading: () => <Loading /> }
);
const RentPagination = dynamic(
  () => import('@/src/components/RentPage/RentPagination')
);

export default async function RentPage({
  searchParams,
}: {
  searchParams: Promise<HouseSearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const [houses, locations, categories] = await Promise.all([
    getRentMortData(resolvedSearchParams),
    fetch(`${process.env.BASE_URL}/locations`).then((res) => res.json()),
    fetch(`${process.env.BASE_URL}/categories`).then((res) => res.json()),
  ]);

  return (
    <>
      <Filters locations={locations} categories={categories} />
      <HouseRentGrid houses={houses} />
      <RentPagination />
    </>
  );
}
