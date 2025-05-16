'use client';
import { useImmediateUpdateFilter } from '@/src/utils/useImmediateUpdateFilter';
import { Pagination } from '@heroui/react';
import React from 'react';

export default function RentPagination() {
  const immediateFilter  = useImmediateUpdateFilter()
  return (
    <div dir="ltr" className="flex justify-center mt-10">
      <Pagination
        total={10}
        radius="full"
        showControls
        classNames={{
          cursor: 'bg-[#7575EF]',
          prev: 'bg-transparent border-1 border-[#7575EF] text-[#7575EF]',
          next: 'bg-transparent border-1 border-[#7575EF] text-[#7575EF]',
        }}
        onChange={(page) => immediateFilter({ page: page.toString() })}
      />
    </div>
  );
}
