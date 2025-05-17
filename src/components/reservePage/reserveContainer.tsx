'use client';
import dynamic from 'next/dynamic';
import { ClientInput } from '../common/inputs/clientInput';
import { SearchListBtn } from '../RentPage/filters';
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
import { useEffect, useRef } from 'react';
import { throttle } from 'lodash';
const HouseReserveCardsGrid = dynamic(
  () => import('./HouseReserveCardsGrid'),
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

  // const mapWidth = useRef(60)
  const isResizing = useRef(false);

  const mapRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLElement>(null)

  function calculateGridColumns(mapWidth: number): string {
    const breakpoints = [
      { width: 40, cols: 4 },
      { width: 55, cols: 3 },
      { width: 70, cols: 2 },
      { width: 80, cols: 1 }
    ];

    const columns = breakpoints.find(point => mapWidth < point.width)?.cols || 4;
    return `repeat(${columns}, minmax(0, 1fr))`;
  }

  const startResizing = () => {
    isResizing.current = true;
    document.body.style.userSelect = 'none';
  };

  const handleResizing = (e: MouseEvent) => {
    if (!isResizing.current) return;
    
    const newMapWidth = (e.clientX / window.innerWidth) * 100;

    if (window.innerWidth > 1024) {
      if (newMapWidth >= 20 && newMapWidth < 80) {
        if(mapRef.current) mapRef.current.style.width = newMapWidth + '%'
        if(cardRef.current) cardRef.current.style.width = 100 - newMapWidth + '%'
        
        if(gridRef.current) gridRef.current.style.gridTemplateColumns = calculateGridColumns(newMapWidth)
      }
    }
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    window.addEventListener('mousemove', throttle(handleResizing, 100));
    window.addEventListener('mouseup', stopResizing);
    
    return () => {
      window.removeEventListener('mousemove', throttle(handleResizing, 100));
      window.removeEventListener('mouseup', stopResizing);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col-reverse lg:flex-row justify-between gap-6">
      <div
        ref={cardRef}
        className="max-lg:w-full! lg:w-2/5 m-0 lg:mt-8 flex flex-col gap-12"
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
        <div className="h-[80vh] overflow-y-scroll flex flex-wrap justify-center">
          <HouseReserveCardsGrid ref={gridRef}/>
        </div>
      </div>

      <div
        ref={mapRef}
        className="h-80 lg:h-full max-lg:w-full! lg:w-3/5 flex relative"
      >
        <Tooltip
          content="برای تغییر اندازه بکشید"
          placement="left"
          closeDelay={0}
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
            className="w-2 h-12 cursor-ew-resize bg-[#7575EF] hover:scale-110 hover:bg-pink-600 duration-200 absolute -right-4 top-1/2 -translate-y-1/2 rounded-full text-white hidden lg:block"
          />
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
