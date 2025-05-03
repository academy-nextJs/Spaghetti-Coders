import React from 'react';
import { ClientInput } from '../common/inputs/clientInput';
import { Divider } from '@heroui/react';
import { QueryValues } from '@/src/types/types';

export default function FilterBottom({
  updateFilter,
  initialValues,
}: {
  updateFilter: (key: string, value: string) => void;
    initialValues:QueryValues;
}) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <ClientInput
        className=" w-1/6"
        label="حداکثر قیمت"
        labelPlacement="outside"
        placeholder="وارد کنید"
        type="number"
        name="maxPrice"
        defaultValue={initialValues.maxPrice}
        onChange={(e) => updateFilter('maxPrice', e.target.value)}
      />
      <Divider orientation="vertical" className="w-0.5 h-8 rounded-2xl mt-6" />
      <ClientInput
        className="w-1/6"
        label="حداقل اجاره"
        labelPlacement="outside"
        placeholder="وارد کنید"
        type="number"
        name="minRent"
        defaultValue={initialValues.minRent}
        onChange={(e) => updateFilter('minRent', e.target.value)}
      />
      <ClientInput
        className="w-1/6"
        label="حداکثر اجاره"
        labelPlacement="outside"
        placeholder="وارد کنید"
        type="number"
        defaultValue={initialValues.maxRent}
        onChange={(e) => updateFilter('maxRent', e.target.value)}
      />
      <Divider orientation="vertical" className="w-0.5 h-8 rounded-2xl mt-6" />
      <ClientInput
        className="w-1/6"
        label="حداقل متراژ"
        labelPlacement="outside"
        placeholder="وارد کنید"
        type="number"
      />
      <ClientInput
        className="w-1/6"
        label="حداکثر متراژ"
        labelPlacement="outside"
        placeholder="وارد کنید"
        type="number"
      />
    </div>
  );
}
