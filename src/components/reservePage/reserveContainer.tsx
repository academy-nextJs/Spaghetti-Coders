'use client';
import dynamic from 'next/dynamic';
import { ClientInput } from '../common/inputs/clientInput';
import { SearchListBtn } from '../Rent/filters';
import { useUpdateFilter } from '@/src/utils/updateFilter';
import { ClientButton } from '../common/Buttons/common-btn';
import { Breadcrumbs, BreadcrumbItem, useDisclosure } from '@heroui/react';
import ReserveFilterDrawer from './reserveFilterDrawer';
import { ReserveContainerProps } from '@/src/types/types';
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
  return (
    <div className="flex justify-between my-8 w-full">
      <div className="w-[57%] mt-8 flex flex-col gap-12">
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
      <div className="w-2/5 h-screen">
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
