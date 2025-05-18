import DetailTopContainer from '@/src/components/RentPage/DetailPage/topSection/DetailTopContainer';
import api from '@/src/services/api';
import React from 'react';

export default async function RentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: singleData } = await api(`/houses/${slug}`);
  return (
    <>
      <DetailTopContainer photos={singleData.photos} title={singleData.title} address ={singleData.address} slug={slug}/>
    </>
  );
}
