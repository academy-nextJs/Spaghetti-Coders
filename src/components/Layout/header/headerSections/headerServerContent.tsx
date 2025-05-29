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
  // console.log('headerSession', session);

  return (
    <>
      <div className="lg:hidden">
        <HeaderDrawer />
      </div>
      <aside className="hidden lg:flex items-center gap-4">
        <ClientButton className="bg-primaryGray dark:bg-darkMode h-12">
          <Link href="/" className='flex items-center gap-2 size-full'>
            <div className="rounded-full bg-black dark:bg-darkModSubText w-2 h-2"></div>
            خانه
          </Link>
        </ClientButton>
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
        <ClientButton className="hidden lg:block  bg-primaryGray dark:bg-darkMode h-12">
          <Link href="/rent&mort" className="flex size-full items-center">
            رهن و اجاره
          </Link>
        </ClientButton>
        <ClientButton className="hidden lg:block bg-primaryGray dark:bg-darkMode h-12">
          <Link href="/reserve" className="flex size-full items-center">
            رزرو سریع
          </Link>
        </ClientButton>
        <Divider
          orientation="vertical"
          className="hidden lg:flex h-6 w-[2px]"
        />
        {session ? (
          <HeaderSignOutBtn session={session} />
        ) : (
          <ClientButton className="bg-primaryPurple text-white h-12">
            <Link href="/login" className='flex size-full items-center'>
              ثبت نام / ورود
            </Link>
          </ClientButton>
        )}
      </aside>
    </>
  );
}
