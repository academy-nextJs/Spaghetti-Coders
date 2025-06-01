'use client';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TransitionLink } from '../../common/Links/TransitionLink';

export default function SeeDetail({ listId }: { listId: string }) {
  const pathname = usePathname();
  return (
    <TransitionLink href={`${pathname}/${listId}`}>
      <div className="text-primaryPurple flex items-center gap-2 text-nowrap cursor-pointer">
        مشاهده جزئیات
        <HugeiconsIcon icon={ArrowLeft01Icon} color="#7575FE" />
      </div>
    </TransitionLink>
  );
}
