import HotelFacilites from '@/src/components/common/HotelFacilities/HotelFacilites';
import { RentAboutContainer } from '@/src/components/RentPage/DetailPage/aboutSection/RentAboutContainer';
import { DetailCommentContainer } from '@/src/components/RentPage/DetailPage/commentSection/DetailCommentContainer';
import { SimilarAdsContainer } from '@/src/components/RentPage/DetailPage/similarAds/SimilarAdsContainer';
import DetailTopContainer from '@/src/components/RentPage/DetailPage/topSection/DetailTopContainer';
import { ReserveAboutContainer } from '@/src/components/ReservePage/DetailPage/aboutSection/ReserveAboutContainer';
import api from '@/src/services/interceptors/server';
import React from 'react';

export default async function RentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: singleData } = await api(`/houses/${slug}`);
  return (
    <main className="flex flex-col gap-12">
      <DetailTopContainer
        photos={singleData.photos}
        title={singleData.title}
        address={singleData.address}
        slug={slug}
      />
      <section className="flex flex-col md:flex-row justify-between gap-4 md:gap-12 lg:gap-20">
        <HotelFacilites />
        <RentAboutContainer photos={singleData.photos} />
      </section>
        <ReserveAboutContainer location={singleData.location} />
        <DetailCommentContainer ID={slug} />
        <SimilarAdsContainer />
    </main>
  );
}
