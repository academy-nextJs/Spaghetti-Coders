import React from 'react'
import { ClientButton } from '../../../ClientUI'
import { SvgRight } from '@/src/assets/svgs'

const BackHome = () => {
  return (
    <div>
      <ClientButton  href="/Landing" className="text-sm bg-[#F0F0F0] text-black">
        صفحه اصلی
        <SvgRight />
      </ClientButton></div>
  )
}

export default BackHome