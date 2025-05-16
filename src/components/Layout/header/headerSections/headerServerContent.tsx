import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/auth';
import { Divider, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';

import { HeaderDrawer } from '../drawer';
import { ThemeSwitcher } from '../../../ThemSwitcher';
import { ClientButton } from '../../../common/Buttons/common-btn';
import { ClientUser } from '../../../common/UserAvatar/ClientUser';
import { signOutAct } from '@/src/lib/actions/signOut/signOutAction';
import Logo from '@/public/AlFA.svg';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';

export async function HeaderServerContent() {
  const session = await auth();
  console.log({ session });

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
        className="justify-center dark:invert-100 absolute bottom-1/2 translate-1/2 right-1/2 translate-x-1/2"
        src={Logo.src}
        alt="Logo"
        width={78}
        height={78}
      />
      <aside className="hidden lg:flex items-center gap-4">
        <Link href="/rent&mort">
          <ClientButton className="bg-[#F0F0F0] dark:bg-darkMode h-12">
            رهن و اجاره
          </ClientButton>
        </Link>
        <Link href="/reserve">
          <ClientButton className="bg-[#F0F0F0] dark:bg-darkMode h-12">
            رزرو سریع
          </ClientButton>
        </Link>
        <Divider orientation="vertical" className="h-6 w-[2px]" />
        {session ? (
          <form action={signOutAct}>
            <Popover>
              <PopoverTrigger>
                <ClientButton
                  className="bg-transparent text-white h-12 px-2"
                  type='button'
                >
                  <HugeiconsIcon icon={ArrowDown01Icon} className='text-black dark:text-white' />
                  <ClientUser
                    name={session?.user?.name}
                    avatarProps={{
                      src: session?.user?.image ?? undefined,
                      showFallback: true,
                    }}
                    classNames={{
                      name: "leading-normal text-xs text-black dark:text-white"
                    }}
                  />
                </ClientButton>
              </PopoverTrigger>
              <PopoverContent>
                <ClientButton>خروج</ClientButton>
              </PopoverContent>
            </Popover>

          </form>
        ) : (
          <Link href="/login">
            <ClientButton className="bg-[#7575FE] text-white h-12">
              ثبت نام / ورود
            </ClientButton>
          </Link>
        )}
      </aside>
      <aside className="lg:hidden flex gap-3">
        <ClientButton className="bg-[#7575FE] text-white h-12">
          ثبت نام / ورود
        </ClientButton>
      </aside>
    </>
  );
}