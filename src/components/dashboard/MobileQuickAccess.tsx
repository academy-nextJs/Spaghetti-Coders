'use client';
import { Drawer, DrawerContent, useDisclosure } from '@heroui/react';
import React, { useState } from 'react';
import { ThemeSwitcher } from '../ThemSwitcher';
import { HugeiconsIcon } from '@hugeicons/react';
import { MenuCircleIcon } from '@hugeicons/core-free-icons';
import NotificationButton from './header/NotificationButton';

export default function MobileQuickAccess({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" bg-white dark:bg-black flex flex-wrap gap-4 items-center px-4 py-2 rounded-4xl">
      <ThemeSwitcher />
      <HugeiconsIcon
        icon={MenuCircleIcon}
        color="#7575EF"
        fill={isHovered ? '#7575EF' : ''}
        size={46}
        onClick={onOpen}
        className="transition-all group-hover:fill-[#4F4FFF]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <NotificationButton />
      <Drawer isOpen={isOpen} placement="bottom" onOpenChange={onOpenChange}>
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </div>
  );
}
