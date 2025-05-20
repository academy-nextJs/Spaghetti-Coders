'use client';
import React from 'react';
import { Image } from '@heroui/react';

type ThumbnailItemProps = {
  photo: string;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
};

const ThumbnailItem = React.memo(({ photo, index, isActive, onClick }: ThumbnailItemProps) => {
  return (
    <div
      tabIndex={0}
      role="button"
      data-thumbnail
      onClick={() => onClick(index)}
      className={`cursor-pointer border-2 rounded-large overflow-hidden transition-all duration-150 ${
        isActive ? 'border-[#7575EF] scale-105' : 'border-transparent'
      }`}
    >
      <Image
        src={photo}
        alt={`Thumb ${index}`}
        className="aspect-square object-cover"
        loading="lazy"
      />
    </div>
  );
});
ThumbnailItem.displayName = 'ThumbnailItem';
export default ThumbnailItem;
