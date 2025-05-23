'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Session } from 'next-auth';
import { ClientButton } from '@/src/components/common/Buttons/common-btn';
import { ClientUser } from '@/src/components/common/UserAvatar/ClientUser';
import { signOutAct } from '@/src/lib/actions/signOut/signOutAction';

export function HeaderSignOutBtn({ session }: { session: Session }) {
  return (
      <Popover showArrow placement='bottom-end'>
        <PopoverTrigger>
          <ClientButton
            className="bg-transparent h-12 px-2"
            type='button'
            radius='sm'
          >
            <HugeiconsIcon icon={ArrowDown01Icon} className='text-black dark:text-white' />
            <ClientUser
              name={session?.user?.name}
              avatarProps={{
                src: session?.user?.image ?? undefined,
                showFallback: true,
              }}
              classNames={{
                name: "leading-normal text-xs text-black dark:text-white max-w-[5rem] text-wrap break-all"
              }}
            />
          </ClientButton>
        </PopoverTrigger>
        <PopoverContent>
          <form action={signOutAct}>
            <ClientButton
              className="bg-transparent text-red-400 h-12 px-2"
              type='submit'
              radius='sm'
            >
              خروج
            </ClientButton>
          </form>
        </PopoverContent>
      </Popover>
  );
}