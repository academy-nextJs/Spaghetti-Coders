import React from 'react';
import ImageGallery from './ImageGallery';
import TopBtn from './TopBtn';
import DetailTopText from './DetailTopText';

export default function DetailTopContainer({
  photos,
  title,
  address,
  slug
}: {
  photos: string[];
  title: string;
  address: string;
  slug:string
}) {
  return (
    <section>
      <ImageGallery photos={photos} slug={slug}/>
      <div className='flex justify-between'>
        <DetailTopText title={title} address={address} />
        <TopBtn id={slug} />
      </div>
    </section>
  );
}
