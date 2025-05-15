import IconWrapper from '@/src/components/common/Icons/IconWrapper';
import { MapsLocation02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

export default function DetailTopText({
  title,
  address,
}: {
  title: string;
  address: string;
}) {
  return (
    <div>
      <h1 className="font-bold text-2xl my-2">{title}</h1>
      <div className=" text-sm flex items-center">
        <IconWrapper>
          <HugeiconsIcon icon={MapsLocation02Icon} size={16} />
        </IconWrapper>

        {address}
      </div>
    </div>
  );
}
