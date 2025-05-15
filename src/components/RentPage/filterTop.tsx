'use client';
import React from 'react';
import { ClientInput } from '../common/inputs/clientInput';
import { SearchListBtn } from './filters';
import SelectClient from '../common/SelectClient';
import { Category, LocationType, QueryValues } from '@/src/types/types';

export default function FilterTop({
  updateFilter,
  locations,
  categories,
  initialValues
}: {
  updateFilter: (key: string, value: string) => void;
  locations: LocationType[];
  categories: Category[];
  initialValues:QueryValues
}) {
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

  const selectLocation = locations.map(location => (
    {
      key: location.id,
      label: location.area_name 
    }
  ))
  const selectCatArray = categories.map( category => (
    {
      key: category.name,
      label: category.name
    }
  ))

  const tradingType = [
    {
      key: 'rental',
      label: 'اجاره'
    },
    {
      key: 'direct_purchase',
      label:'خرید مستقیم'
    },
    {
      key : 'mortgage',
      label: 'رهن'
    },
    {
      key: 'reservation',
      label: 'رزرو'
    }
  ]


  return (
    <div className="flex items-center gap-4 flex-wrap my-6">
      <ClientInput
        className="lg:w-1/4 w-1/2"
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
        className=" lg:w-1/6 w-2/5"
        labelPlacement="outside"
        defaultSelectedKeys={[initialValues.order]}
        items={orderArr}
        onChange={(e) => updateFilter('order', e.target.value)}
      />
      <SelectClient
        labelPlacement="outside"
        label="محل مورد نظر"
        placeholder="انتخاب کنید"
        className=" lg:w-1/6 w-[30%]"
        defaultSelectedKeys={[initialValues.location]}
        items={selectLocation}
        onChange={(e) => updateFilter('location', e.target.value)}
      />
      <SelectClient
        labelPlacement="outside"
        label="نوع ملک"
        placeholder="انتخاب کنید"
        className="lg:w-1/6 w-[30%]"
        items={selectCatArray}
        defaultSelectedKeys={[initialValues.propertyType]}
        onChange={(e) => updateFilter('propertyType', e.target.value)}
      />
      <SelectClient
        labelPlacement="outside"
        label="نوع معامله"
        placeholder="انتخاب کنید"
        className="lg:w-1/6 w-[30%]"
        items={tradingType}
        defaultSelectedKeys={[initialValues.transactionType]}
        onChange={(e) => updateFilter('transactionType', e.target.value)}
      />
    </div>
  );
}
