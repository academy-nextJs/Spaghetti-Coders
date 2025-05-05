import React from 'react';
import { Divider } from '@heroui/react';
import { HeaderFastSelect, HeaderOptionSelect } from './headerSelect';
import Logo from '@/public/AlFA.svg';
import Image from 'next/image';
import { HeaderDrawer } from './drawer';
import { ThemeSwitcher } from '../ThemSwitcher';
import { ClientButton } from '../common/Buttons/common-btn';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="lg:hidden">
        <HeaderDrawer />
      </div>
      <aside className="hidden lg:flex items-center gap-4">
        <Link href="/">
          <ClientButton className="bg-[#F0F0F0] dark:bg-darkMode h-12 flex">
            <div className="rounded-full bg-black dark:bg-darkModSubText w-2 h-2"></div>
            خانه
          </ClientButton>
        </Link>
        <ClientButton className="bg-[#F0F0F0] dark:bg-darkMode h-12">
          مقالات
        </ClientButton>
        <ClientButton className="bg-[#F0F0F0] dark:bg-darkMode h-12">
          درباره آلفا
        </ClientButton>
        <ThemeSwitcher />
      </aside>
      <Image
        className="justify-center dark:invert-100"
        src={Logo.src}
        alt="Logo"
        width={78}
        height={78}
      />
      <aside className="hidden lg:flex items-center gap-4">
        <HeaderOptionSelect />
        <HeaderFastSelect />
        <Divider orientation="vertical" className="h-6 w-[2px]" />
        <ClientButton className="bg-[#7575FE] text-white h-12">
          ثبت نام / ورود
        </ClientButton>
      </aside>
      <aside className="lg:hidden flex gap-3">
        <ClientButton className="bg-[#7575FE] text-white h-12">
          ثبت نام / ورود
        </ClientButton>
      </aside>
    </>
  );
}
