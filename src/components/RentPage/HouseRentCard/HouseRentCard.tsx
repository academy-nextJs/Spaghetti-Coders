import Image from 'next/image';
import Pic from '@/public/PoolHouse.png';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Bathtub01Icon,
  BedSingle02Icon,
  CarParking02Icon,
  ManWomanIcon,
  MapsLocation01Icon,
  SlideIcon,
  StarAward01Icon,
} from '@hugeicons/core-free-icons';
import IconWrapper from '../../common/Icons/IconWrapper';
import { HouseRentCardProps } from '@/src/types/types';
import SeeDetail from './SeeDetail';

export function HouseRentCard({
  title,
  address,
  bathroom = 0,
  bedroom = 0,
  parking = 0,
  capacity = 0,
  yardType,
  price,
  photo,
  rate,
  listId,
}: HouseRentCardProps) {
  return (
    <div className="flex gap-4">
      <Image
        alt="Apartment view"
        className="object-cover max-w-2/5 aspect-[1.19/1] rounded-3xl"
        src={photo || Pic.src}
        width={300}
        height={280}
        unoptimized
      />

      <div className="flex flex-col justify-between gap-4 max-w-[57.7%]">
        <h3 className="text-xl font-semibold text-right w-fit">{title}</h3>

        <div className="bg-primaryPurple text-white text-md font-normal rounded-full px-2 py-1 w-fit flex gap-1">
          {/* <StarMedalIcon /> */}
          <HugeiconsIcon icon={StarAward01Icon} />
          {rate} ستاره
        </div>

        <div className="flex flex-nowrap items-center gap-1 text-right">
          <div className="flex items-center gap-1 flex-1 min-w-0">
            <IconWrapper>
              <HugeiconsIcon
                icon={MapsLocation01Icon}
                className="flex-shrink-0 text-[#595959] dark:text-white"
                size={20}
              />
            </IconWrapper>
            <span className="font-medium truncate">{address}</span>
          </div>
        </div>

        {bathroom > 0 ||
        yardType ||
        bedroom > 0 ||
        capacity > 0 ||
        parking > 0 ? (
          <div
            className={`w-full flex flex-wrap items-center gap-3 font-medium`}
          >
            {bathroom > 0 ? (
              <div className={`flex items-center`}>
                <IconWrapper>
                  <HugeiconsIcon
                    icon={Bathtub01Icon}
                    size={20}
                    className="text-[#595959] dark:text-white"
                  />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{bathroom} حمام</span>
              </div>
            ) : null}

            {yardType ? (
              <div className={`flex items-center`}>
                <IconWrapper>
                  <HugeiconsIcon
                    icon={SlideIcon}
                    size={20}
                    className="text-[#595959] dark:text-white"
                  />
                </IconWrapper>
                <span className="mx-1">{yardType}</span>
              </div>
            ) : null}

            {bedroom > 0 ? (
              <div className={`flex items-center`}>
                <IconWrapper>
                  <HugeiconsIcon
                    icon={BedSingle02Icon}
                    size={20}
                    className="text-[#595959] dark:text-white"
                  />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{bedroom} خواب</span>
              </div>
            ) : null}

            {capacity > 0 ? (
              <div className={`flex items-center`}>
                <IconWrapper>
                  <HugeiconsIcon
                    icon={ManWomanIcon}
                    size={20}
                    className="text-[#595959] dark:text-white"
                  />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{capacity} نفر</span>
              </div>
            ) : null}

            {parking > 0 ? (
              <div className={`flex items-center`}>
                <IconWrapper>
                  <HugeiconsIcon
                    icon={CarParking02Icon}
                    size={20}
                    className="text-[#595959] dark:text-white"
                  />
                </IconWrapper>
                <span className="mx-1 text-nowrap">{parking} پارکینگ</span>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="flex justify-between gap-1 text-right font-medium">
          <div className="flex items-end">
            <span className="font-bold text-xl leading-6">{price}</span>
            <span className="text-[0.8rem]/[0.8rem] text-[#595959] dark:text-[#A6A6A6] font-semibold">
              تومان
            </span>
          </div>
          <SeeDetail listId={listId} />
        </div>
      </div>
    </div>
  );
}
