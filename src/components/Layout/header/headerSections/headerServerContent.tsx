import Image from 'next/image';
import { auth } from '@/auth';
import { Divider } from '@heroui/react';

import { HeaderDrawer } from '../drawer';
import { ThemeSwitcher } from '../../../ThemSwitcher';
import { ClientButton } from '../../../common/Buttons/common-btn';
import Logo from '@/public/AlFA.svg';
import { HeaderSignOutBtn } from './headerSignOutBtn';
import { NavLink } from '@/src/components/common/Links/NavLink';
import { TransitionLink } from '@/src/components/common/Links/TransitionLink';

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
          <NavLink href="/landing" className='flex justify-center items-center size-full'>
            خانه
          </NavLink>
        </ClientButton>
        <ClientButton className="bg-primaryGray dark:bg-darkMode h-12">
          مقالات
        </ClientButton>
        <ClientButton className="bg-primaryGray dark:bg-darkMode h-12">
          درباره آلفا
        </ClientButton>
        <ThemeSwitcher />
      </aside>
      <TransitionLink href="/landing">
        <Image
          className="justify-center dark:invert-100 absolute bottom-1/2 translate-1/2 right-1/2 translate-x-1/2"
          src={Logo.src}
          alt="Logo"
          width={78}
          height={78}
        />
      </TransitionLink>
      <aside className="flex items-center gap-4">
        <ClientButton className="hidden lg:block  bg-primaryGray dark:bg-darkMode h-12">
          <NavLink href="/rent&mort" className="flex size-full items-center">
            رهن و اجاره
          </NavLink>
        </ClientButton>
        <ClientButton className="hidden lg:block bg-primaryGray dark:bg-darkMode h-12">
          <NavLink href="/reserve" className="flex size-full items-center">
            رزرو سریع
          </NavLink>
        </ClientButton>
        <Divider
          orientation="vertical"
          className="hidden lg:flex h-6 w-[2px]"
        />
        {session ? (
          <HeaderSignOutBtn session={session} />
        ) : (
          <ClientButton className="bg-primaryPurple text-white h-12">
            <TransitionLink href="/login" className='flex size-full items-center'>
              ثبت نام / ورود
            </TransitionLink>
          </ClientButton>
        )}
      </aside>
    </>
  );
}
