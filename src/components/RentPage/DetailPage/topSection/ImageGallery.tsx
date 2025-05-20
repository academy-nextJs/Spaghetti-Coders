import {
  mockApartment,
  mockHouse,
  mockInterior,
} from '@/src/components/MockImages';
import Image from 'next/image';
import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import Link from 'next/link';

interface ImageGalleryProps {
  photos: string[];
  slug:string
}

export default function ImageGallery({ photos,slug }: ImageGalleryProps) {
  const allPhotos = photos.concat(mockHouse, mockApartment, mockInterior);
  return (
    <div
      dir="ltr"
      className=" w-full grid lg:grid-cols-4 grid-cols-2 justify-evenly lg:gap-6 gap-3"
    >
      {allPhotos[0] && (
        <div className="col-span-2 relative w-full aspect-[2/1]">
          <Image
            src={allPhotos[0]}
            alt={`Photo 1`}
            fill
            className="object-cover rounded-3xl "
            unoptimized
            loading="lazy"
          />
        </div>
      )}
      <div className="flex lg:flex-col w-full lg:gap-0 gap-3">
        {allPhotos.slice(1, 3).map((photo, index) => (
          <div
            key={index + 1}
            className={`relative lg:w-full lg:aspect-auto aspect-[2/1] w-1/2 lg:h-1/2 ${index === 0 ? 'lg:mb-6' : ''}`}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              fill
              className="rounded-3xl object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="flex lg:flex-col w-full lg:gap-0 gap-3">
        {allPhotos.slice(4, 6).map((photo, index) => (
          <div
            key={index + 3}
            className={`relative lg:w-full lg:aspect-auto aspect-[2/1] w-1/2 lg:h-1/2 ${index === 0 ? 'lg:mb-6' : ''}`}
          >
            <Image
              src={photo}
              alt={`Photo ${index + 3}`}
              fill
              className="rounded-3xl object-cover"
              unoptimized
              loading="lazy"
            />

            {index === 1 && (
              <Link href={`/rent&mort/${slug}/images`}>
                <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center cursor-pointer">
                  <p className="text-white text-lg flex">
                    بازدید {allPhotos.length - 5} عکس دیگر
                    <HugeiconsIcon icon={ArrowRight01Icon} />
                  </p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
