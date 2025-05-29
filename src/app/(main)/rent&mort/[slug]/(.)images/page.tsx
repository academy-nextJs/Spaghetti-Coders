import {
  mockApartment,
  mockHouse,
  mockInterior,
} from '@/src/components/MockImages';
import GalleryModal from '@/src/components/RentPage/DetailPage/topSection/GalleryModal';
import api from '@/src/services/interceptors/server';
import React from 'react';

export default async function InterceptedImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await api(`/houses/${slug}`);
  const allPhotos = data.photos.concat(mockHouse, mockApartment, mockInterior);

  return (
    <div>
      <GalleryModal allPhotos={allPhotos} />
    </div>
  );
}
