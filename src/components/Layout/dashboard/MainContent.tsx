import React from 'react'

export default function MainContent({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
  return (
    <div className='h-fit bg-white dark:bg-black rounded-3xl p-6'>
      {children}
    </div>
  )
}
