'use client';
import { Popover, PopoverContent, PopoverTrigger, User } from '@heroui/react';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

export default function DashUser() {
  return (
    <div className="flex items-center gap-1.5">
      <User
        avatarProps={{
          src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
        }}
        description="role"
        name="Junior Garcia"
      />
      <Popover placement="bottom-start" showArrow={true} offset={20} classNames={{content:'dark:bg-darkMode'}} backdrop='opaque'>
        <PopoverTrigger>
          <HugeiconsIcon icon={ArrowDown01Icon} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
