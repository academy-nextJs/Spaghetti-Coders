import {
  mockApartment,
  mockHouse,
  mockInterior,
} from '@/src/components/MockImages';
import GalleryModal from '@/src/components/RentPage/DetailPage/topSection/GalleryModal';
import api from '@/src/services/api';
import React from 'react';

export default async function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } =  params;

  const { data } = await api(`/houses/${slug}`);
  const allPhotos = data.photos.concat(mockHouse, mockApartment, mockInterior);

  return (
    <div>
      <GalleryModal allPhotos={allPhotos} />
    </div>
  );
}
