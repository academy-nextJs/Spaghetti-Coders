import React from 'react';
import { ClientButtonGray, ClientButtonPurple } from '../ClientUI';
import { Divider } from '@heroui/react';
import { HeaderFastSelect, HeaderOptionSelect } from './headerSelect';
import Logo from '@/public/AlFA.svg';
import Image from 'next/image';
import { HeaderDrawer } from './drawer';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full overflow-hidden">
      <div className="lg:hidden">
        <HeaderDrawer />
      </div>
      <aside className="hidden lg:flex items-center gap-4">
        <ClientButtonGray className="h-12">خانه</ClientButtonGray>
        <ClientButtonGray className="h-12">مقالات</ClientButtonGray>
        <ClientButtonGray className="h-12">درباره آلفا</ClientButtonGray>
      </aside>
      <Image src={Logo.src} alt="Logo" width={78} height={78} />
      <aside className="hidden lg:flex items-center gap-4">
        <HeaderOptionSelect />
        <HeaderFastSelect />
        <Divider orientation="vertical" className="h-6 w-[2px]" />
        <ClientButtonPurple className="h-12">ثبت نام / ورود</ClientButtonPurple>
      </aside>
      <aside className='lg:hidden'>
        <ClientButtonPurple className="h-12">ثبت نام / ورود</ClientButtonPurple>
      </aside>
    </header>
  );
}
