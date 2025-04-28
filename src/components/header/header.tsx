import React from 'react';
import { ClientButton } from '../ClientUI';
import { Divider } from '@heroui/react';
import { HeaderFastSelect, HeaderOptionSelect } from './headerSelect';
import Logo from '@/public/AlFA.svg';
import Image from 'next/image';
import { HeaderDrawer } from './drawer';

export default function Header() {
  return (
    <header className="relative flex items-center justify-between w-full overflow-hidden">
      <div className="lg:hidden">
        <HeaderDrawer />
      </div>
      <aside className="hidden lg:flex items-center gap-4">
        <ClientButton className="bg-[#F0F0F0] text-black h-12 flex">
          <div className='rounded-full bg-black w-2 h-2'></div>
          خانه
        </ClientButton>
        <ClientButton className="bg-[#F0F0F0] text-black h-12">مقالات</ClientButton>
        <ClientButton className="bg-[#F0F0F0] text-black h-12">درباره آلفا</ClientButton>
      </aside>
      <Image src={Logo.src} alt="Logo" width={78} height={78} className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
      <aside className="hidden lg:flex items-center gap-4">
        <HeaderOptionSelect />
        <HeaderFastSelect />
        <Divider orientation="vertical" className="h-6 w-[2px]" />
        <ClientButton className="bg-[#7575FE] text-white h-12">ثبت نام / ورود</ClientButton>
      </aside>
      <aside className='lg:hidden'>
        <ClientButton className="bg-[#7575FE] text-white h-12">ثبت نام / ورود</ClientButton>
      </aside>
    </header>
  );
}
