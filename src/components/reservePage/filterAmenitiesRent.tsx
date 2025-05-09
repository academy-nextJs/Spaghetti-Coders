'use client';
import { ReserveInitialValProps } from '@/src/types/types';
import SelectClient from '../common/SelectClient';
import { ratings } from './filterOptionArrays';

type Props = {
  onRateChange: (value?: string) => void;
  initialValues: ReserveInitialValProps
};

export default function FilterAmenitiesAndRating({ onRateChange,initialValues }: Props) {
  return (
    <>
      <SelectClient
        label="امکانات هتل"
        labelPlacement="outside"
        placeholder="انتخاب کنید"
        items={[]}
        className="w-[45%]"
      />
      <SelectClient
        label="امتیاز هتل"
        labelPlacement="outside"
        placeholder="انتخاب کنید"
        items={ratings}
        className="w-[45%]"
        defaultSelectedKeys={[initialValues.rate]}
        onChange={(e) => onRateChange(e.target.value || undefined)}
      />
    </>
  );
}
