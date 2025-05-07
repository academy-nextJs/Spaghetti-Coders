'use client';
import dynamic from 'next/dynamic';
import { ClientInput } from '../common/inputs/clientInput';
import { SearchListBtn } from '../Rent/filters';
import { useUpdateFilter } from '@/src/utils/updateFilter';
import { ClientButton } from '../common/Buttons/common-btn';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
const DynamicMap = dynamic(() => import('./MapComponent'), {
  ssr: false,
});

export default function ReserveContainer() {
  const updateFilter = useUpdateFilter();
  return (
    <div className="flex justify-between my-8">
      <div className="w-[37%] mt-8">
        <Breadcrumbs>
          <BreadcrumbItem href="/">خانه</BreadcrumbItem>
          <BreadcrumbItem href="/reserve">
            رزرو هتل
          </BreadcrumbItem>
          <BreadcrumbItem >
            رزرو هتل رشت
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="flex justify-between mt-6">
          <ClientButton className="bg-[#7575FE] h-12 text-white">فیلتر ها</ClientButton>
          <ClientInput
            className=" w-4/5"
            placeholder="جستجو کنید ..."
            name="search"
            startContent={<SearchListBtn />}
            onChange={(e) => updateFilter('search', e.target.value)}
          />
        </div>
      </div>
      <DynamicMap />
    </div>
  );
}
