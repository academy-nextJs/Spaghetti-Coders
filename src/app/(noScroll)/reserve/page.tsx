import ReserveContainer from '@/src/components/ReservePage/reserveContainer';
import { getResrvationData } from '@/src/lib/getReserveData';
import api from '@/src/services/interceptors/server';
import { HouseSearchParams } from '@/src/types/types';

export default async function ReservePage({
  searchParams,
}: {
  searchParams: Promise<HouseSearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const reservData = await getResrvationData(resolvedSearchParams);
  const { data: locations } = await api.get('/locations');
  console.log(reservData);
  return <ReserveContainer locations={locations} />;
}
