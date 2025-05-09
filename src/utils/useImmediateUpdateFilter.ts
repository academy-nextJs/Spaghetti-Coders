// src/utils/useImmediateUpdateFilter.ts
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useImmediateUpdateFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function updateFilter(
    keyOrObj: string | Record<string, string | undefined>,
    maybeValue?: string
  ) {
    const params = new URLSearchParams(searchParams);

    if (typeof keyOrObj === 'string') {
      if (maybeValue) {
        params.set(keyOrObj, maybeValue);
      } else {
        params.delete(keyOrObj);
      }
    } else {
      Object.entries(keyOrObj).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return updateFilter;
}
