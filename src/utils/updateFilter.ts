// src/utils/updateFilter.ts
'use client';

import { debounce } from 'lodash';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useUpdateFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateFilter = debounce((key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  return updateFilter;
}
