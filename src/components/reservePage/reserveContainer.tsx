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
import { useEffect, useMemo, useRef } from 'react';
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

  const mapWidth = useRef<number>(60)
  const isResizing = useRef(false);

  const mapRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLElement>(null) //Section Element

  function calculateGridColumns(mapWidth: number): string {
    const tablet = window.innerWidth < 1250
    const breakpoints = [
      { width: 40, cols: 4 },
      { width: 55, cols: 3 },
      { width: 70, cols: 2 },
      { width: 80, cols: 1 }
    ];

    const columns = breakpoints.find(point => mapWidth < point.width)?.cols || 4;
    return `repeat(${tablet ? columns - 1 : columns}, minmax(0, 1fr))`;
  }

  function setGridColumns() { //this logic must be separate as a function, cause we should pass it to our resize eventListener
    if(gridRef.current) gridRef.current.style.gridTemplateColumns = calculateGridColumns(mapWidth.current)
  }
  
  const startResizing = () => {
    isResizing.current = true;
    document.body.style.userSelect = 'none';
  };

  const handleResizing = (e: MouseEvent) => {
    if (!isResizing.current) return;
    
    const calculatedMapWidth = (e.clientX / window.innerWidth) * 100;
    
    if (window.innerWidth >= 1024) {
      if (calculatedMapWidth >= 20 && calculatedMapWidth < 80) {
        if(mapRef.current) mapRef.current.style.width = calculatedMapWidth + '%'
        if(cardRef.current) cardRef.current.style.width = 100 - calculatedMapWidth + '%'
        mapWidth.current = calculatedMapWidth; //set the map's width in a ref to be accessible outside of this function
        
        setGridColumns() //wrapped this logic inside a function
      }
    }
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.body.style.userSelect = '';
  };

  const throttledHandleResizing = useMemo(() => throttle(handleResizing, 100), [])
  const throttledSetGridColumns = useMemo(() => throttle(setGridColumns, 500), [])

  useEffect(() => {
    window.addEventListener('mousemove', throttledHandleResizing);
    window.addEventListener('mouseup', stopResizing);
    window.addEventListener('resize', throttledSetGridColumns);
    
    return () => {
      window.removeEventListener('mousemove', throttledHandleResizing);
      window.removeEventListener('mouseup', stopResizing);
      window.removeEventListener('resize', throttledSetGridColumns);

      throttledHandleResizing.cancel() //a method for canceling any pending invocation of the debounced function, neccessary for clean up
      throttledSetGridColumns.cancel()
    };
  }, [throttledHandleResizing, throttledSetGridColumns]);

  return (
    <div className="h-full w-full flex flex-col-reverse lg:flex-row justify-between gap-6">
      <div
        ref={cardRef}
        className="max-lg:w-full! lg:w-2/5 m-0 lg:mt-8 flex flex-col gap-12 transition-all duration-75 ease-linear"
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
        <div className="overflow-y-scroll flex flex-wrap justify-center">
          <HouseReserveCardsGrid ref={gridRef}/>
        </div>
      </div>

      <div
        ref={mapRef}
        className="h-80 lg:h-full max-lg:w-full! lg:w-3/5 flex relative transition-all duration-75 ease-linear"
      >
        <Tooltip
          content="برای تغییر اندازه بکشید"
          placement="bottom"
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
