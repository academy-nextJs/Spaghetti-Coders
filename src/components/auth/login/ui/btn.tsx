import React from 'react'
import Image from 'next/image'
import { ClientButton } from '../../../ClientUI'
import GoogleIcon from '@/src/assets/Google.svg'
import AppleIcon from '@/src/assets/Apple.svg'


const Btn = () => {
    return (
        <section className="flex justify-between gap-4 mt-12 mb-8">
            <ClientButton
                label="ورود با گوگل"
                className="flex items-center justify-center gap-1 bg-transparent border-1 border-[#d5d2d2] rounded-full py-3 px-2 w-1/2"
                labelPosition='afterChild'
            >
                <Image src={GoogleIcon} alt='Google Icon'/>
            </ClientButton>
            <ClientButton
                label="ورود با اپل"
                className="flex items-center justify-center gap-1 bg-transparent border-1 border-[#d5d2d2] rounded-full py-3 px-4 w-1/2"
                labelPosition='afterChild'
            >
                <Image src={AppleIcon} alt='Apple Icon' className='dark:invert' />
            </ClientButton>
        </section>
    )
}

export default Btn