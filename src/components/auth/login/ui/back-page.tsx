import React from 'react'
import { useRouter } from 'next/navigation'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'
import { ClientButton } from '@/src/components/common/Buttons/common-btn'

const BackPage = () => {
  const router = useRouter()

  return (
    <div>
      <ClientButton 
        className="text-sm bg-[#F0F0F0] text-black" 
        onPress={() => router.back()}
        endIcon={<HugeiconsIcon icon={ArrowLeft01Icon} />}
      >
        بازگشت
      </ClientButton>
    </div>
  )
}

export default BackPage