import React from 'react'
import { ClientButton } from '../../../ClientUI'
import { AppleIcon, GoogleIcon } from '@/src/assets/svgs'

const Btn = () => {
    return (
        <div>
            <section className="flex justify-between gap-4 mt-12 mb-8">
                <ClientButton
                    label="ورود با گوگل"
                    svg={<GoogleIcon />}
                    className="flex items-center justify-center gap-1 bg-white border-1 border-[#F0F0F0] rounded-full py-3 px-2 w-1/2"
                />
                <ClientButton
                    label="ورود با اپل"
                    svg={<AppleIcon />}
                    className="flex items-center justify-center gap-1 bg-white border-1 border-[#F0F0F0] rounded-full py-3 px-4 w-1/2"
                />
            </section>

        </div>
    )
}

export default Btn