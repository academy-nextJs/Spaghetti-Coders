import ReserveContainer from '@/src/components/reservePage/reserveContainer';
import { getResrvationData } from '@/src/lib/getReserveData';
import { HouseSearchParams } from '@/src/types/types';

export default async function ReservePage({searchParams}: { searchParams: Promise<HouseSearchParams> }) {
  const resolvedSearchParams = await searchParams
  const reservData = await getResrvationData(resolvedSearchParams);
  console.log(reservData)
  return (
    <div>
      <ReserveContainer />
    </div>
  );
}
