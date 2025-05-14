import React from 'react'
import Image from 'next/image'
import GoogleIcon from '@/src/assets/Google.svg'
import AppleIcon from '@/src/assets/Apple.svg'
import { ClientButton } from '@/src/components/common/Buttons/common-btn'


const Btn = () => {
    return (
        <section className="flex justify-center flex-wrap gap-4 mt-12 mb-8">
            <ClientButton
                className="flex items-center justify-center gap-1 bg-transparent border-1 border-[#d5d2d2] rounded-full py-3 px-2 basis-[40%] lg:basis-[48%]"
                startIcon={<Image src={GoogleIcon} alt='Google Icon'/>}
            >
                <Image src={GoogleIcon} alt='Google Icon'/>
            </ClientButton>
            <ClientButton
                className="flex items-center justify-center gap-1 bg-transparent border-1 border-[#d5d2d2] rounded-full py-3 px-4 basis-[40%] lg:basis-[48%]"
                startIcon={<Image src={AppleIcon} alt='Apple Icon' className='dark:invert' />}
            >
                <span className="mr-1">ورود با اپل</span>
            </ClientButton>
            <ClientButton
                className="flex items-center justify-center gap-1 bg-transparent border-1 border-[#d5d2d2] rounded-full py-3 px-4 basis-[40%] lg:basis-[48%]"
                startIcon={<Image src={AppleIcon} alt='Apple Icon' className='dark:invert' />}
            >
                <span className="mr-1">ورود با گیت هاب</span>
            </ClientButton>
        </section>
    )
}

export default Btn