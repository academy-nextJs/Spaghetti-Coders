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
// import { throttle } from 'lodash';
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

  // const [mapWidth, setMapWidth] = useState(60); // percent

  const mapWidth = useRef(60)
  const isResizing = useRef(false);

  const mapRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const startResizing = () => {
    isResizing.current = true;
    document.body.style.userSelect = 'none';
  };

  const handleResizing = (e: MouseEvent) => {
    console.log("Func execute")
    if (!isResizing.current) return;
    // const newMapWidth = (e.clientX / window.innerWidth) * 100;
    // if (newMapWidth >= 30 && newMapWidth < 70) {
      //   mapWidth.current = newMapWidth;
      // }
      const newMapWidth = (e.clientX / window.innerWidth) * 100;
      if (newMapWidth >= 30 && newMapWidth < 70) {
        if(mapRef.current) mapRef.current.style.width = newMapWidth + '%'
        if(cardRef.current) cardRef.current.style.width = 100 - newMapWidth + '%'
      }

  };

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
  }, []);

  return (
    <div className="flex justify-between my-8 w-full">
      <div
        ref={cardRef}
        style={{ width: `${100 - mapWidth.current}%` }}
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
        ref={mapRef}
        style={{ width: `${mapWidth.current}%` }}
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
