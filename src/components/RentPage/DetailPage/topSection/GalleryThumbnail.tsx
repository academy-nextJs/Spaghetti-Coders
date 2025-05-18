'use client';
import React, { useState, useRef, useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ThumbnailItem from './ThumbnailItem';
import GallerySlider from './GallerySlider';

type GalleryThumbnailProp = {
  allPhotos: string[];
  isModal?:boolean
};

export default function GalleryThumbnail({ allPhotos, isModal }: GalleryThumbnailProp) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = useCallback((index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  }, []);

  const handleArrowNavigation = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const nextIndex = Math.min(activeIndex + 1, allPhotos.length - 1);
      handleThumbnailClick(nextIndex);
      focusThumbnail(nextIndex);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const prevIndex = Math.max(activeIndex - 1, 0);
      handleThumbnailClick(prevIndex);
      focusThumbnail(prevIndex);
    }
  },[activeIndex, allPhotos.length,  handleThumbnailClick]);

  const focusThumbnail = (index: number) => {
    const thumbnails =
      gridRef.current?.querySelectorAll('[data-thumbnail]') || [];
    const target = thumbnails[index] as HTMLElement | undefined;
    target?.focus();
  };

  return (
    <div>
      <div className={isModal? 'w-full m-auto':"w-4/5 m-auto"}>
        <GallerySlider
          allPhotos={allPhotos}
          activeIndex={activeIndex}
          onSlideChange={setActiveIndex}
          swiperRef={swiperRef}
          isModal={isModal}
        />

        {/* Thumbnails */}
        <div
          ref={gridRef}
          className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 mt-4"
          tabIndex={0}
          onKeyDown={handleArrowNavigation}
        >
          {allPhotos.map((photo, index) => (
            <ThumbnailItem
              key={index}
              photo={photo}
              index={index}
              isActive={index === activeIndex}
              onClick={handleThumbnailClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
