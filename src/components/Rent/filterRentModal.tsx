'use client';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react';
import React from 'react';
import { ClientInput } from '../common/inputs/clientInput';
import { SearchListBtn } from './filters';
import SelectClient from '../common/SelectClient';
import { Category, LocationType, QueryValues } from '@/src/types/types';
interface filterRentModalProp {
  isOpen: boolean;
  onOpenChange: () => void;
  updateFilter: (key: string, value: string) => void;
  locations: LocationType[];
  categories: Category[];
  initialValues: QueryValues
}
export default function FilterRentModal({
  updateFilter,
  initialValues,
  ...props
}: filterRentModalProp) {
  const orderArr = [
    {
      key: 'ASC',
      label: 'صعودی',
    },
    {
      key: 'DESC',
      label: 'نزولی',
    },
  ];

  const selectLocation = props.locations.map((location) => ({
    key: location.id,
    label: location.area_name,
  }));
  const selectCatArray = props.categories.map((category) => ({
    key: category.id,
    label: category.name,
  }));
  return (
    <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        <ModalHeader>
        فیلتر
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-wrap justify-between gap-y-3">
            <ClientInput
              className=" w-full"
              label="جستجو"
              labelPlacement="outside"
              placeholder="جستجو کنید ..."
              name="search"
              defaultValue={initialValues.search}
              startContent={<SearchListBtn />}
              onChange={(e) => updateFilter('search', e.target.value)}
            />
            <SelectClient
              label="مرتب سازی بر اساس"
              placeholder="انتخاب کنید"
              className="w-[45%]"
              labelPlacement="outside"
              defaultSelectedKeys={[initialValues.order]}
              items={orderArr}
              onChange={(e) => updateFilter('order', e.target.value)}
            />
            <SelectClient
              labelPlacement="outside"
              label="محل مورد نظر"
              placeholder="انتخاب کنید"
              className="w-[45%]"
              defaultSelectedKeys={[initialValues.location]}
              items={selectLocation}
              onChange={(e) => updateFilter('location', e.target.value)}
            />
            <SelectClient
              labelPlacement="outside"
              label="نوع ملک"
              placeholder="انتخاب کنید"
              className="w-[45%]"
              defaultSelectedKeys={[initialValues.propertyType]}
              items={selectCatArray}
              onChange={(e) => updateFilter('propertyType', e.target.value)}
            />
            {/*  */}
            <ClientInput
              className=" w-2/5"
              label="حداکثر قیمت"
              labelPlacement="outside"
              placeholder="وارد کنید"
              type="number"
              name="maxPrice"
              defaultValue={initialValues.maxPrice}
              onChange={(e) => updateFilter('maxPrice', e.target.value)}
            />
            <ClientInput
              className="w-2/5"
              label="حداقل اجاره"
              labelPlacement="outside"
              placeholder="وارد کنید"
              type="number"
              name="minRent"
              defaultValue={initialValues.minRent}
              onChange={(e) => updateFilter('minRent', e.target.value)}
            />
            <ClientInput
              className="w-2/5"
              label="حداکثر اجاره"
              labelPlacement="outside"
              placeholder="وارد کنید"
              type="number"
              defaultValue={initialValues.maxRent}
              onChange={(e) => updateFilter('maxRent', e.target.value)}
            />
            <ClientInput
              className="w-2/5"
              label="حداقل متراژ"
              labelPlacement="outside"
              placeholder="وارد کنید"
              type="number"
            />
            <ClientInput
              className="w-2/5"
              label="حداکثر متراژ"
              labelPlacement="outside"
              placeholder="وارد کنید"
              type="number"
            />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
