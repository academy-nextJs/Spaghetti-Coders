import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/auth';
import { Divider } from '@heroui/react';

import { HeaderDrawer } from '../drawer';
import { ThemeSwitcher } from '../../../ThemSwitcher';
import { ClientButton } from '../../../common/Buttons/common-btn';
import Logo from '@/public/AlFA.svg';
import { HeaderSignOutBtn } from './headerSignOutBtn';

export async function HeaderServerContent() {
  const session = await auth();
  console.log('session', session);

  return (
    <>
      <div className="lg:hidden">
        <HeaderDrawer />
      </div>
      <aside className="hidden lg:flex items-center gap-4">
        <Link href="/">
          <ClientButton className="bg-primaryGray dark:bg-darkMode h-12 flex">
            <div className="rounded-full bg-black dark:bg-darkModSubText w-2 h-2"></div>
            خانه
          </ClientButton>
        </Link>
        <ClientButton className="bg-primaryGray dark:bg-darkMode h-12">
          مقالات
        </ClientButton>
        <ClientButton className="bg-primaryGray dark:bg-darkMode h-12">
          درباره آلفا
        </ClientButton>
        <ThemeSwitcher />
      </aside>
      <Link href="/">
        <Image
          className="justify-center dark:invert-100 absolute bottom-1/2 translate-1/2 right-1/2 translate-x-1/2"
          src={Logo.src}
          alt="Logo"
          width={78}
          height={78}
        />
      </Link>
      <aside className="flex items-center gap-4">
        <Link href="/rent&mort" className="hidden lg:flex">
          <ClientButton className="bg-primaryGray dark:bg-darkMode h-12">
            رهن و اجاره
          </ClientButton>
        </Link>
        <Link href="/reserve" className="hidden lg:flex">
          <ClientButton className="bg-primaryGray dark:bg-darkMode h-12">
            رزرو سریع
          </ClientButton>
        </Link>
        <Divider
          orientation="vertical"
          className="hidden lg:flex h-6 w-[2px]"
        />
        {session ? (
          <HeaderSignOutBtn session={session} />
        ) : (
          <Link href="/login">
            <ClientButton className="bg-primaryPurple text-white h-12">
              ثبت نام / ورود
            </ClientButton>
          </Link>
        )}
      </aside>
    </>
  );
}
