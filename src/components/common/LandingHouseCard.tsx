'use client';

import {
  // Card,
  // CardBody,
} from "@heroui/react";
import Image from "next/image";
import Pic from '@/public/Mansion.png'
import { HouseCardProps } from "@/src/types/types";
import { BathroomIcon, BedroomIcon, MapLocationIcon, ParkingIcon, RatingHeartIcon, TomanIcon, YardIcon } from "@/src/assets/SGVs";
import Carousel from "./carousel";

export default function LandingHouseCard({ title, location, bathroom, bedroom, parking, yard, price, originalPrice, rating, discountPercentage }: HouseCardProps) {
  return (
    <div className="relative w-[300px] overflow-hidden">
      <Carousel slidesPerView={1} houseCarousel>
        <Image
          alt="Luxury apartment view"
          className="object-cover w-full aspect-square rounded-3xl"
          src={Pic.src}
          width={300}
          height={280}
        />
        <Image
          alt="Luxury apartment view"
          className="object-cover w-full aspect-square rounded-3xl"
          src={Pic.src}
          width={300}
          height={280}
        />
        <Image
          alt="Luxury apartment view"
          className="object-cover w-full aspect-square rounded-3xl"
          src={Pic.src}
          width={300}
          height={280}
        />
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
            <RatingHeartIcon />
          </div>
          : null}
      </div>
      <section className="overflow-visible pt-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-right">{title}</h3>

          <div className="flex items-center gap-1 text-right">
            <MapLocationIcon />
            <span className="font-medium">{location}</span>
          </div>

          <div className="w-full flex flex-wrap items-center gap-3 font-medium">
            {bathroom > 0 ?
              <div className="flex items-center">
                <BathroomIcon />
                <span className="mx-1 text-nowrap">{bathroom} حمام</span>
              </div>
              : null}

            {bedroom > 0 ?
              <div className="flex items-center">
                <BedroomIcon />
                <span className="mx-1 text-nowrap">{bedroom} خواب</span>
              </div>
              : null}

            {parking > 0 ?
              <div className="flex items-center">
                <ParkingIcon />
                <span className="mx-1 text-nowrap">{parking} پارکینگ</span>
              </div>
              : null}

            {yard ?
              <div className="flex items-center">
                <YardIcon />
                <span className="mx-1">حیاط دار</span>
              </div>
              : null}
          </div>

          <div className="flex items-end gap-1 text-right font-medium">
            {originalPrice ?
              <>
                <div className='relative flex gap-1 items-end text-[#A6A6A6]'>
                  <span className="font-bold text-2xl leading-6">{originalPrice}</span>
                  <TomanIcon fill='#A6A6A6' />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 rotate-[-10deg]"></div>
                </div>

                <span className='font-black'>/</span>
              </>
              : null}

            <span className="font-bold text-2xl leading-6">{price}</span>
            <TomanIcon />
          </div>

        </div>
      </section>
    </div>
  );
}