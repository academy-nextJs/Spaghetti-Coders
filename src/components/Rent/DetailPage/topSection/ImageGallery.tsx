import Image from 'next/image';
import React from 'react';

interface ImageGalleryProps {
  photos: string[];
}

export default function ImageGallery({ photos }: ImageGalleryProps) {
  return (
    <div className=" w-full grid lg:grid-cols-3 grid-cols-1 justify-evenly lg:gap-6 gap-y-3">
      {photos[0] && (
        <div className="col-span-2 relative w-full aspect-[2/1]">
          <Image
            src={photos[0]}
            alt={`Photo 1`}
            fill
            className="object-cover rounded-3xl "
            unoptimized
            loading="lazy"
          />
        </div>
      )}
      <div className="flex lg:flex-col w-full lg:gap-0 gap-3">
        {photos.slice(1, 3).map((photo, index) => (
          <div
            key={index + 1}
            className={`relative lg:w-full lg:aspect-auto aspect-[2/1] w-1/2 lg:h-1/2 ${index === 0 ? 'lg:mb-6' : ''}`}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 2}`}
              fill
              className="rounded-3xl object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
