'use client';
import dynamic from 'next/dynamic';
import { ClientInput } from '../common/inputs/clientInput';
import { SearchListBtn } from '../Rent/filters';
import { useUpdateFilter } from '@/src/utils/updateFilter';
import { ClientButton } from '../common/Buttons/common-btn';
import {
  Breadcrumbs,
  BreadcrumbItem,
  useDisclosure,
  Tooltip,
} from '@heroui/react';
import ReserveFilterDrawer from './reserveFilterDrawer';
import { ReserveContainerProps } from '@/src/types/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
const HouseReserveCardsGrid = dynamic(
  () => import('../HouseReservePage/HouseReserveCardsGrid'),
  {
    ssr: false,
  }
);
const DynamicMap = dynamic(() => import('./MapComponent'), {
  ssr: false,
});

export default function ReserveContainer({ locations }: ReserveContainerProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const updateFilter = useUpdateFilter();

  const [mapWidth, setMapWidth] = useState(60); // percent
  const isResizing = useRef(false);

  const startResizing = () => {
    isResizing.current = true;
    document.body.style.userSelect = 'none';
  };

  const handleResizing = useCallback(throttle((e: MouseEvent) => {
    if (!isResizing.current) return;
    const newMapWidth = (e.clientX / window.innerWidth) * 100;
    if (newMapWidth >= 30 && newMapWidth < 70) {
      setMapWidth(newMapWidth);
    }
  }),[]);
  const stopResizing = () => {
    isResizing.current = false;
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleResizing);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      window.removeEventListener('mousemove', handleResizing);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [handleResizing]);

  return (
    <div className="flex justify-between my-8 w-full">
      <div
        style={{ width: `${100 - mapWidth}%` }}
        className=" mt-8 flex flex-col gap-12"
      >
        <Breadcrumbs>
          <BreadcrumbItem href="/">خانه</BreadcrumbItem>
          <BreadcrumbItem href="/reserve">رزرو هتل</BreadcrumbItem>
          <BreadcrumbItem>رزرو هتل رشت</BreadcrumbItem>
        </Breadcrumbs>
        <div className="flex justify-between">
          <ClientButton
            className="bg-[#7575FE] h-12 text-white"
            onPress={onOpen}
          >
            فیلتر ها
          </ClientButton>
          <ClientInput
            className=" w-4/5"
            placeholder="جستجو کنید ..."
            name="search"
            startContent={<SearchListBtn />}
            onChange={(e) => updateFilter('search', e.target.value)}
          />
        </div>
        <div>
          <div className="h-[80vh] overflow-y-scroll">
            <HouseReserveCardsGrid />
          </div>
        </div>
      </div>

      <div
        style={{ width: `${mapWidth}%` }}
        className=" h-screen flex relative"
      >
        <Tooltip
          content="برای تغییر اندازه بکشید"
          placement="left"
          closeDelay={1000}
          showArrow
          classNames={{
            base: [
              'before:bg-pink-600 ',
            ],
            content: [
              'py-2 px-4 shadow-xl',
              'text-white bg-gradient-to-br from-[#7575EF] to-pink-600',
            ],
          }}
        >
          <div
            onMouseDown={startResizing}
            className=" cursor-ew-resize bg-[#7575EF] hover:scale-110 hover:bg-pink-600 duration-200 absolute -right-16 p-2 rounded-2xl top-6 text-white "
          >
            بکشید
          </div>
        </Tooltip>
        <DynamicMap />
      </div>
      <ReserveFilterDrawer
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        locations={locations}
      />
    </div>
  );
}
