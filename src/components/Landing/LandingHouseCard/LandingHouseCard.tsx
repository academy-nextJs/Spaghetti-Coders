'use client';

import Image from "next/image";
import { HouseCardProps } from "@/src/types/types";
import Classes from './LandingHouseCard.module.css'
import IconWrapper from "../../common/Icons/IconWrapper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Bathtub01Icon, BedSingle02Icon, CarParking02Icon, FavouriteCircleIcon, HotelBellIcon, ManWomanIcon, MapsLocation01Icon, SlideIcon } from "@hugeicons/core-free-icons";
import Carousel from "../../common/carousel";

export default function LandingHouseCard(
  {
    title,
    address,
    bathroom = 0,
    bedroom = 0,
    parking = 0,
    capacity = 0,
    yardType,
    price,
    originalPrice,
    rating,
    discountPercentage,
    photos,
    nights = 0,
    locOnMap,
  }: HouseCardProps) {
  return (
    <div className="relative max-w-[300px] overflow-hidden">
      <Carousel  slidesPerView={1} houseCarousel locOnMap={locOnMap}>
        {(photos || []).map((photo, index) => (
          <Image
            key={index}
            alt="Apartment view"
            className="object-cover w-full aspect-square rounded-3xl"
            src={photo}
            width={300}
            height={300}
            unoptimized
          />
        ))}
      </Carousel>

      <div className="absolute top-2 left-2 z-10 flex items-center gap-1 text-sm font-medium text-white">
        {discountPercentage ?
          <div className="bg-[#FF5555] flex items-center rounded-full h-full p-1.5">
            <span className="px-1">%{discountPercentage}-</span>
          </div>
          : null}

        {rating ?
          <div className="bg-[#7575FE] flex items-center rounded-full p-1">
            <span className="px-2">{rating}</span>
            <HugeiconsIcon icon={FavouriteCircleIcon} />
          </div>
          : null}
      </div>

      <div className="pt-3 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-right">{title}</h3>

        <div className="flex flex-nowrap items-center gap-1 text-right">
          <div className="flex items-center gap-1 flex-1 min-w-0">
            <IconWrapper>
              <HugeiconsIcon icon={MapsLocation01Icon} size={20} className="flex-shrink-0 text-[#595959] dark:text-white" />
            </IconWrapper>
            <span className="font-medium truncate">{address}</span>
          </div>

          {nights > 0 ?
            <div className="flex items-center gap-1 flex-shrink-0">
              <IconWrapper>
                <HugeiconsIcon icon={HotelBellIcon} size={20} className="text-[#595959] dark:text-white" />
              </IconWrapper>
              <span className="font-medium">{nights} شب</span>
            </div>
            : null}
        </div>

        {bathroom > 0 || yardType || bedroom > 0 || capacity > 0 || parking > 0 ?
          <div className={`w-full flex flex-wrap items-center gap-3 font-medium ${Classes['flex-container']}`}>
            {bathroom > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <IconWrapper>
                  <HugeiconsIcon icon={Bathtub01Icon} size={20} className="text-[#595959] dark:text-white" />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{bathroom} حمام</span>
              </div>
              : null}

            {yardType ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <IconWrapper>
                  <HugeiconsIcon icon={SlideIcon} size={20} className="text-[#595959] dark:text-white" />
                </IconWrapper>
                <span className="mx-1">{yardType}</span>
              </div>
              : null}

            {bedroom > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <IconWrapper>
                  <HugeiconsIcon icon={BedSingle02Icon} size={20} className="text-[#595959] dark:text-white" />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{bedroom} خواب</span>
              </div>
              : null}

            {capacity > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <IconWrapper>
                  <HugeiconsIcon icon={ManWomanIcon} size={20} className="text-[#595959] dark:text-white" />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{capacity} نفر</span>
              </div>
              : null}

            {parking > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <IconWrapper>
                  <HugeiconsIcon icon={CarParking02Icon} size={20} className="text-[#595959] dark:text-white" />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{parking} پارکینگ</span>
              </div>
              : null}
          </div>
          : null}

        <div className="flex flex-wrap items-end gap-1 text-right font-medium">
          {originalPrice ?
            <>
              <div className='relative flex items-end text-[#A6A6A6]'>
                <span className="font-bold text-xl leading-6">{originalPrice}</span>
                <span className="text-[0.8rem]/[0.8rem] text-[#A6A6A6] font-semibold">تومان</span>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 rotate-[-10deg]"></div>
              </div>

              <span className='font-black'>/</span>
            </>
            : null}
          <div className="flex items-end">
            <span className="font-bold text-xl leading-6">{price}</span>
            <span className="text-[0.8rem]/[0.8rem] text-[#595959] dark:text-[#A6A6A6] font-semibold">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}