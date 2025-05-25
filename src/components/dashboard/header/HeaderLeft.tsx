import React from 'react';
import { ThemeSwitcher } from '../../ThemSwitcher';
import { HugeiconsIcon } from '@hugeicons/react';
import { Notification02Icon } from '@hugeicons/core-free-icons';
import { Divider } from '@heroui/react';
import DashUser from './DashUser';

export default function HeaderLeft() {
  return (
    <div className="flex gap-4 items-center">
      <ThemeSwitcher />
      <button className="p-2.5 rounded-full cursor-pointer border-1.5">
        <HugeiconsIcon icon={Notification02Icon} />
      </button>
      <Divider orientation="vertical" className="hidden lg:flex h-8 w-[2px]" />
      <DashUser/>
    </div>
  );
}
