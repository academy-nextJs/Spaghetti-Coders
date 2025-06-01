import React from 'react';
import { ThemeSwitcher } from '../../ThemSwitcher';

import { Divider } from '@heroui/react';
import DashUser from './DashUser';
import NotificationButton from './NotificationButton';
import { auth } from '@/auth';
import api from '@/src/services/interceptors/server';

export default async function HeaderLeft() {
  const session = await auth();
  const {data:profileData} = await api(`/users/${session?.user?.id}`)
  return (
    <div className="flex gap-4 items-center">
      <div className=" gap-4 items-center md:flex hidden">
        <ThemeSwitcher />
        <NotificationButton />
      </div>
      <Divider orientation="vertical" className="hidden lg:flex h-8 w-[2px]" />
      <DashUser data={profileData.user}/>
    </div>
  );
}
