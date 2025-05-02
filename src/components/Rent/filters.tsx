'use client';
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchList01Icon } from '@hugeicons/core-free-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useIsMobile } from '@/src/hooks/useIsMobile';
import { ClientButton } from '../common/Buttons/common-btn';
import { useDisclosure } from '@heroui/react';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { RentFiltersProps } from '@/src/types/types';
import FilterTop from './filterTop';
import FilterBottom from './filterBottom';
import { debounce } from 'lodash';
const FilterRentModal = dynamic(() => import('./filterRentModal'), {
  ssr: false,
});

export function SearchListBtn() {
  return (
    <div className="rounded-full bg-[#7575FE] p-3 text-white cursor-pointer -mr-5">
      <HugeiconsIcon icon={SearchList01Icon} />
    </div>
  );
}
export default function Filters({ locations, categories }: RentFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const updateFilter = useMemo(
    () =>
      debounce((key: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
        router.push(`/houses/rent/?${params.toString()}`);
      }, 500),
    [router, searchParams]
  );
  const queryValues = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return {
      search: params.get('search') || '',
      location: params.get('location') || '',
      category: params.get('category') || '',
      order: params.get('order') || '',
      propertyType: params.get('propertyType') || '',
      maxPrice: params.get('maxPrice') || '',
      minRent: params.get('minRent') || '',
      maxRent: params.get('maxRent') || '',
    };
  }, [searchParams]);
  return (
    <section>
      {isMobile ? (
        <>
          <ClientButton
            onPress={onOpen}
            className="bg-primaryPurple text-white"
            aria-label="Open filters"
          >
            فیلتر
          </ClientButton>
          <FilterRentModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            updateFilter={updateFilter}
            locations={locations}
            categories={categories}
            initialValues={queryValues}
          />
        </>
      ) : (
        <>
          <FilterTop
            updateFilter={updateFilter}
            locations={locations}
            categories={categories}
            initialValues={queryValues}
          />
          <FilterBottom
            updateFilter={updateFilter}
            initialValues={queryValues}
          />
        </>
      )}
    </section>
  );
}
