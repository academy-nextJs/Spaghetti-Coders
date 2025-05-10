'use client';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerProps,
} from '@heroui/react';
import { LocationType } from '@/src/types/types';
import { useMemo, useState } from 'react';
import { ClientButton } from '../common/Buttons/common-btn';
import { HugeiconsIcon } from '@hugeicons/react';
import { Delete02Icon } from '@hugeicons/core-free-icons';
import { useImmediateUpdateFilter } from '@/src/utils/useImmediateUpdateFilter';
import FilterLocationAndSort from './filterLocationSort';
import FilterPriceSlider from './filterPriceSlider';
import FilterAmenitiesAndRating from './filterAmenitiesRent';
import { useSearchParams } from 'next/navigation';

type ReserveFilterProps = Omit<DrawerProps, 'children'> & {
  locations: LocationType[];
};

export default function ReserveFilterDrawer({
  locations,
  ...props
}: ReserveFilterProps) {
  const immediateUpdateFilter = useImmediateUpdateFilter();
  const searchParams = useSearchParams();
  const queryValues = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return {
      location: params.get('location') || '',
      order: params.get('order') || '',
      sort: params.get('sort') || '',
      maxPrice: params.get('maxPrice') || '',
      minPrice: params.get('minPrice') || '',
      rate: params.get('rate') || '',
    };
  }, [searchParams]);

  const [price, setPrice] = useState<[number, number]>([
    queryValues.minPrice ? Number(queryValues.minPrice) : 0,
    queryValues.maxPrice ? Number(queryValues.maxPrice) : 1_000_000,
  ]);
  const [sortValue, setSortValue] = useState<string | undefined>(
    queryValues.sort && queryValues.order
      ? `${queryValues.sort}_${queryValues.order}`
      : undefined
  );

  const [rate, setRate] = useState<string | undefined>(
    queryValues.rate || undefined
  );
  const [location, setLocation] = useState<string | undefined>(
    queryValues.location || undefined
  );

  const handleApplyFilters = () => {
    const [sort, order] = sortValue?.split('_') ?? [undefined, undefined];
    immediateUpdateFilter({
      sort,
      order,
      rate,
      location,
      minPrice: price[0].toString(),
      maxPrice: price[1].toString(),
    });
  };
  const handleResetFilters = (onClose: () => void) => {
    setPrice([0, 1_000_000]);
    setSortValue(undefined);
    setRate(undefined);
    setLocation(undefined);
    immediateUpdateFilter({
      sort: undefined,
      order: undefined,
      rate: undefined,
      location: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    });
    onClose()
  };

  return (
    <Drawer
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      size="xl"
      hideCloseButton
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="justify-between">
              <p>فیلتر ها</p>
              <p className="text-[#FF5555] flex cursor-pointer" onClick={() =>handleResetFilters(onClose)}>
                <HugeiconsIcon icon={Delete02Icon} />
                حذف همه
              </p>
            </DrawerHeader>
            <DrawerBody>
              <form
                className="flex flex-wrap justify-between gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleApplyFilters();
                }}
              >
                <FilterLocationAndSort
                  locations={locations}
                  onSortChange={setSortValue}
                  onLocationChange={setLocation}
                  initialValues={queryValues}
                />

                <FilterPriceSlider
                  value={price}
                  onChangeEnd={setPrice}
                  initialValues={queryValues}
                />

                <FilterAmenitiesAndRating
                  onRateChange={setRate}
                  initialValues={queryValues}
                />

                <div className="w-1/2 flex justify-between mt-4">
                  <ClientButton size="lg" onPress={onClose}>
                    بستن
                  </ClientButton>
                  <ClientButton
                    className="bg-[#7575EF] text-white"
                    size="lg"
                    type="submit"
                  >
                    مشاهده نتیجه
                  </ClientButton>
                </div>
              </form>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
