'use client';

import Image from "next/image";
// import Pic from '@/public/Mansion.png'
import { MortgageCardProps } from "@/src/types/types";
import { BathroomIcon, BedroomIcon, LeftArrowIcon, MapLocationIcon, ParkingIcon, PeopleCapacityIcon, StarMedalIcon, TomanIcon, YardIcon } from "@/src/assets/SVGs";
import Classes from './MortgageHouseCard.module.css'
import Pic from '@/public/PoolHouse.png'

export default function MortgageHouseCard(
  {
    title,
    address,
    bathroom = 0,
    bedroom = 0,
    parking = 0,
    capacity = 0,
    yardType,
    price,
    // photos,
  }: MortgageCardProps) {
  return (
    <div className="flex gap-4">
      <Image
        alt="Apartment view"
        className="object-cover max-w-2/5 aspect-[1.19/1] rounded-3xl"
        src={Pic.src}
        width={300}
        height={280}
      />

      <div className="flex flex-col justify-between gap-4 max-w-[57.7%]">
        <h3 className="text-xl font-semibold text-right w-fit">{title}</h3>

        <div className="bg-[#7575FE] text-white text-md font-normal rounded-full px-2 py-1 w-fit flex gap-1">
          <StarMedalIcon />
          4 ستاره
        </div>

        <div className="flex flex-nowrap items-center gap-1 text-right">
          <div className="flex items-center gap-1 flex-1 min-w-0">
            <MapLocationIcon />
            <span className="font-medium truncate">{address}</span>
          </div>
        </div>

        {bathroom > 0 || yardType || bedroom > 0 || capacity > 0 || parking > 0 ? 
          <div className={`w-full flex flex-wrap items-center gap-3 font-medium ${Classes['flex-container']}`}>
            {bathroom > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <BathroomIcon />
                <span className="mx-1 text-nowrap">{bathroom} حمام</span>
              </div>
              : null}

            {yardType ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <YardIcon />
                <span className="mx-1">{yardType}</span>
              </div>
              : null}

            {bedroom > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <BedroomIcon />
                <span className="mx-1 text-nowrap">{bedroom} خواب</span>
              </div>
              : null}

            {capacity > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <PeopleCapacityIcon />
                <span className="mx-1 text-nowrap">{capacity} نفر</span>
              </div>
              : null}

            {parking > 0 ?
              <div className={`flex items-center ${Classes['flex-item']}`}>
                <ParkingIcon />
                <span className="mx-1 text-nowrap">{parking} پارکینگ</span>
              </div>
              : null}
          </div>
        : null}

        <div className="flex justify-between gap-1 text-right font-medium">
          <div className="flex items-end">
            <span className="font-bold text-xl leading-6">{price}</span>
            <TomanIcon />
          </div>
          <div className="text-[#7575FE] flex items-center gap-2">
            مشاهده جزئیات
            <LeftArrowIcon stroke="#7575FE" />
          </div>
        </div>
      </div>
    </div>
  );
}