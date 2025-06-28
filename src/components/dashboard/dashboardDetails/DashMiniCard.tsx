import { Pin02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';
import Link from 'next/link';
import { DashCreaitveButton } from '../../common/Buttons/DashCreaitveButton';

export default function DashMiniCard({ count = 5, text = 'txt', href = '' }) {
  return (
    <div>
      <div className="bg-lightBg dark:bg-black px-4 pb-2 rounded-2xl">
        <div className="flex gap-2 mb-2">
          <div className="p-2 rounded-b-2xl group bg-gradient-to-br from-purple-600 to-blue-500 text-white ">
            <HugeiconsIcon icon={Pin02Icon} />
          </div>
          <div className="m-2">
            <p>{count}</p>
            <p>{text}</p>
          </div>
        </div>
        <Link href={href}>
          <DashCreaitveButton />
        </Link>
      </div>
    </div>
  );
}
