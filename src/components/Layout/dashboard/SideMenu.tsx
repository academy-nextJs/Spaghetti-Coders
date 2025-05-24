import React from 'react'

export default function SideMenu({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
  return (
    <aside className='h-[97vh] w-1/4 bg-white dark:bg-black rounded-3xl p-6'>
      {children}
    </aside>
  )
}
