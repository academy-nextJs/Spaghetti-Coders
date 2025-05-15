"use client";

import { useActionState, useEffect, useState } from "react";
import BackPage from "../login/ui/back-page";
import OtpField from "../../common/inputs/multi-input";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { TimeQuarter02Icon } from "@hugeicons/core-free-icons";
import { formatTime } from "@/src/lib/helpers/formatTime";
import { registerVerifyCode } from "@/src/lib/actions/register/register-verify-action";
import { ClientButton } from "../../common/Buttons/common-btn";

export const VerificationStep = ({ email = 'ایمیل خود' }: { email: string | undefined }) => {
    const [timer, setTimer] = useState(120);

    const router = useRouter()

    useEffect(() => {
        if (timer <= 0) return;
        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);

    const [actionState, formAction, isPending] = useActionState(registerVerifyCode, { message: {}, payload: new FormData() })

    return (
        <article className="w-full max-w-md flex flex-col">
            <header className="flex flex-col mb-8">
                <section className="flex items-center gap-12 justify-between">
                    <h1 className="text-3xl font-bold mb-4 text-right">ثبت نام در آلفا</h1>
                    <BackPage />
                </section>
            </header>

            <section className="text-sm items-center justify-between mb-12">
                <p className="text-sm text-[#767676]">
                    کد تایید ارسال شده به <span className="text-[#7575FE]">{email}</span> را وارد کنید
                </p>
                <span className="text-[#7575FE] underline cursor-pointer" onClick={() => router.back()}>تغییر ایمیل</span>
            </section>
            <form action={formAction}>
                <span className="mb-4">کد تایید </span>
                <OtpField
                    length={6}
                    // description=""
                    // isInvalid={false}
                    isRequired
                    errorMessage="کد وارد شده صحیح نیست"
                    radius="lg"
                    size="lg"
                    dir="ltr"
                    name="verifyCode"
                    value={(actionState.payload.get('verifyCode') || undefined) as string}
                />
                <div className="flex flex-row gap-1 mt-4">
                    <ClientButton
                        className="bg-[#7575FE30] text-[#7575FE] px-2 h-10 cursor-auto"
                        startIcon={<HugeiconsIcon icon={TimeQuarter02Icon} />}
                        disabled
                        type="button"
                    >
                        <span className="ml-1">{formatTime(timer)}</span>
                    </ClientButton>
                    <span className="text-[#767676] text-sm mt-3">بعد از اتمام 2 دقیقه ارسال مجدد فعال میشود</span>
                </div>
            
                <ClientButton
                    type="submit"
                    className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-6"
                    disabled={isPending}
                >
                    ارسال
                </ClientButton>
            </form>
        </article>
    );
};
