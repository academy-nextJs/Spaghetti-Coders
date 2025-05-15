import React, { useActionState } from 'react'
import Image from 'next/image'
import GoogleIcon from '@/src/assets/Google.svg'
import GithubIcon from '@/src/assets/Github.png'
import { ClientButton } from '@/src/components/common/Buttons/common-btn'
import { socialLoginAct } from '@/src/lib/actions/login/login-action'


const Btn = () => {
    const [ ,formAction, isPending] = useActionState(socialLoginAct, undefined)
    return (
        <form action={formAction} className="flex justify-center gap-4 mt-12 mb-8">
            <ClientButton
                className="flex items-center justify-center gap-1 bg-transparent border-1 border-[#d5d2d2] rounded-full py-3 px-2 w-1/2"
                startIcon={<Image src={GoogleIcon} alt='Google Icon'/>}
                type='submit'
                disabled={isPending}
                name='provider'
                value='google'
            >
                <span className="mr-1">ورود با گوگل</span>
            </ClientButton>
            <ClientButton
                className="flex items-center justify-center gap-1 bg-transparent border-1 border-[#d5d2d2] rounded-full py-3 px-4 w-1/2"
                startIcon={<Image src={GithubIcon} alt='Apple Icon' className='size-6 dark:invert' />}
                type='submit'
                disabled={isPending}
                name='provider'
                value='github'
            >
                <span className="mr-1">ورود با گیت هاب</span>
            </ClientButton>
        </form>
    )
}

export default Btn