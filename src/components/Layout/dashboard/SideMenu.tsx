import React from 'react'

export default function SideMenuLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
  return (
    <aside className='h-[97vh] w-full bg-white dark:bg-black rounded-3xl p-6'>
      {children}
    </aside>
  )
}
