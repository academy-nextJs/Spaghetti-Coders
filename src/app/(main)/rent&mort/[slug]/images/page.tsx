import { TransitionLink } from '@/src/components/common/Links/TransitionLink';
import {
  mockApartment,
  mockHouse,
  mockInterior,
} from '@/src/components/MockImages';
import GalleryThumbnail from '@/src/components/RentPage/DetailPage/topSection/GalleryThumbnail';
import api from '@/src/services/interceptors/server';

export default async function ImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await api(`/houses/${slug}`);
  const allPhotos = data.photos.concat(mockHouse, mockApartment, mockInterior);
  return (
    <div>
      <TransitionLink href={`/rent&mort/${slug}`}>
        <h2 className="w-fit m-auto decoration-[#7575EF] underline decoration-4 underline-offset-4 hover:text-[#7575EF] hover:font-bold text-2xl mb-4">
          صفحه جزئیات این مکان
        </h2>
      </TransitionLink>
      <GalleryThumbnail allPhotos={allPhotos} />
    </div>
  );
}
