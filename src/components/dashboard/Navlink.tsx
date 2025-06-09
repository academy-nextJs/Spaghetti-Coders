'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navObj } from './navConfig';
import { HugeiconsIcon } from '@hugeicons/react';

export function DashboardNavLink() {
  const pathname = usePathname();

  return (
    <nav className='flex flex-col gap-2'>
      {navObj.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition hover:text-primaryPurple ${
              isActive ? "bg-primaryPurple text-white" : ""
            }`}
          >
            <HugeiconsIcon icon={item.icon}/>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

