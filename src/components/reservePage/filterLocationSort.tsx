'use client';
import SelectClient from '../common/SelectClient';
import { sortOptions } from './filterOptionArrays';
import { LocationType, ReserveInitialValProps } from '@/src/types/types';

type Props = {
  locations: LocationType[];
  onSortChange: (value?: string) => void;
  onLocationChange: (value?: string) => void;
  initialValues: ReserveInitialValProps
};

export default function FilterLocationAndSort({
  locations,
  onSortChange,
  onLocationChange,
  initialValues
}: Props) {
  const locationItems = locations.map((l) => ({
    key: l.area_name,
    label: l.area_name,
  }));

  const sortOrder = [ initialValues.sort, initialValues.order ].join('_');

  return (
    <>
      <SelectClient
        label="مقصد یا  هتل شما"
        labelPlacement="outside"
        placeholder="انتخاب کنید"
        items={locationItems}
        defaultSelectedKeys={[initialValues.location]}
        className="w-[45%]"
        onChange={(e) => onLocationChange(e.target.value || undefined)}
      />
      <SelectClient
        label="مرتب سازی بر اساس"
        labelPlacement="outside"
        placeholder="انتخاب کنید"
        items={sortOptions}
        className="w-[45%]"
        defaultSelectedKeys={[sortOrder]}
        onSelectionChange={(keys) =>
          onSortChange(
            keys === 'all' || keys.size === 0
              ? undefined
              : (Array.from(keys)[0] as string)
          )
        }
      />
    </>
  );
}
