import React from 'react'
import { ClientButton } from '../../../ClientUI'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'

const BackHome = () => {
  return (
    <div>
      <ClientButton  href="/Landing" className="text-sm bg-[#F0F0F0] text-black">
        صفحه اصلی
        <HugeiconsIcon icon={ArrowLeft01Icon} />
      </ClientButton></div>
  )
}

export default BackHome