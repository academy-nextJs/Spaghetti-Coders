'use client';

import Image from "next/image";
// import Pic from '@/public/Mansion.png'
import { MortgageCardProps } from "@/src/types/types";
import { BathroomIcon, BedroomIcon, MapLocationIcon, ParkingIcon, PeopleCapacityIcon, TomanIcon, YardIcon } from "@/src/assets/SVGs";
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
    <div className="relative max-w-1/2 flex flex-row overflow-hidden">
      {/* <div> */}
        <Image
          alt="Apartment view"
          className="object-cover w-full aspect-square rounded-3xl"
          src={Pic.src}
          width={300}
          height={280}
          // unoptimized
          // fill
        />
      {/* </div> */}

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-right">{title}</h3>

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

        <div className="flex items-end gap-1 text-right font-medium">
          <span className="font-bold text-xl leading-6">{price}</span>
          <TomanIcon />
        </div>
      </div>
    </div>
  );
}