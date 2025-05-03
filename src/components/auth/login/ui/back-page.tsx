import React from 'react'
import { ClientButton } from '../../../ClientUI'
// import { SvgRight } from '@/src/assets/svgs'

const BackPage = () => {
  return (
    <div>
      <ClientButton href="/Landing" className="text-sm bg-[#F0F0F0] text-black">
         بازگشت
        {/* <SvgRight /> */}
      </ClientButton></div>
  )
}

export default BackPage