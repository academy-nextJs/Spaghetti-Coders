"use client"

import { useActionState } from "react"
import { ClientButton } from "../../ClientUI"
import CommonInput from "../../common/inputs/input-btn"
import BackHome from "../login/ui/back-home-btn"
import Btn from "../login/ui/btn"
import Line from "../login/ui/line"
import { registerEmail } from "@/src/lib/actions/register-email-action"

export const EmailStep = () => {
    const [actionState, formAction, isPending] = useActionState(registerEmail, { message: {}, payload: new FormData() })
    return (
        <article className="w-full flex flex-col justify-center max-w-md">
            <header className="flex flex-col mb-8">
                <section className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold mb-4 text-right">ثبت نام در آلفا</h1>
                    <BackHome />
                </section>
            </header>

            <p className="text-sm text-[#767676] text-right mb-8">
                برای ثبت نام در آلفا میتوانید با اکانت گوگل یا اپل خود وارد شوید و یا با ارسال کد
                تایید به ایمیل خود اقدام کنید
            </p>

            <Btn />
            <Line />

            <form action={formAction} className="flex flex-col">
                <CommonInput
                    type="email"
                    label="ایمیل"
                    name="email"
                    className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] dark:bg-transparent dark:border dark:border-gray-100 w-full"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                    defaultValue={(actionState?.payload?.get('email') || "") as string}
                />
                {actionState ? <span className="text-red-400 text-sm mt-2">{actionState.message.email}</span> : null}

                <ClientButton
                    disabled={isPending}
                    type="submit"
                    className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-4"
                >
                    ارسال کد تایید
                </ClientButton>
            </form>
        </article>
    )
}
