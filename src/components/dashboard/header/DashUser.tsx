'use client';
import { UserProfile } from '@/src/types/dashboard_types';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  User,
} from '@heroui/react';
import {
  ArrowDown01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';
import NotificationOption from './popOverOptions/NotificationOption';
import LogoutOption from './popOverOptions/LogoutOption';
import WalletCharge from './popOverOptions/WalletCharge';
interface DashUserProps {
  data: UserProfile;
}

export default function DashUser({ data }: DashUserProps) {
  const {
    isOpen: isPopoverOpen,
    onOpenChange: onPopoverOpenChange,
    onClose: onPopOverClose,
  } = useDisclosure();

  return (
    <div className="flex items-center gap-1.5">
      <User
        avatarProps={{
          src:
            data?.profilePicture ??
            'https://avatars.githubusercontent.com/u/30373425?v=4',
        }}
        description={data?.role ?? 'نامشخص'}
        name={data?.fullName ?? 'بی نام'}
      />
      <Popover
        isOpen={isPopoverOpen}
        onOpenChange={onPopoverOpenChange}
        placement="bottom-start"
        showArrow={true}
        offset={20}
        classNames={{ content: 'dark:bg-darkMode' }}
        backdrop="opaque"
      >
        <PopoverTrigger>
          <HugeiconsIcon icon={ArrowDown01Icon} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-4 py-2 flex flex-col gap-4">
            <WalletCharge/>
            <NotificationOption onPopOverClose={onPopOverClose} />
            <LogoutOption/>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
