import React from 'react'
import { useRouter } from 'next/navigation'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'
import { ClientButton } from '../../../ClientUI'

const BackPage = () => {
  const router = useRouter()

  return (
    <ClientButton className="text-sm bg-[#F0F0F0] text-black" onPress={() => router.back()}>
        بازگشت
      <HugeiconsIcon icon={ArrowLeft01Icon} />
    </ClientButton>
  )
}

export default BackPage