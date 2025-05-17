'use client';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SeeDetail({listId}: {listId: string}) {
      const pathname = usePathname();
  return (
    <Link href={`${pathname}/${listId}`}>
      <div className="text-[#7575FE] flex items-center gap-2 text-nowrap cursor-pointer">
        مشاهده جزئیات
        <HugeiconsIcon icon={ArrowLeft01Icon} color="#7575FE" />
      </div>
    </Link>
  );
}
