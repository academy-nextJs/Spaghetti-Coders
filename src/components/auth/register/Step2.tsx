"use client";

import { useEffect, useRef, useState } from "react";
import { ClientButton } from "../../ClientUI";
import BackPage from "../login/ui/back-page";
import OtpField from "../../common/inputs/multi-input";
import { redirect } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { TimeQuarter02Icon } from "@hugeicons/core-free-icons";
// import { SvgClock } from "@/src/assets/svgs";

export const VerificationStep = ({ email }: { email: string }) => {
    const [timer, setTimer] = useState(120);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);


    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 5);
    }, []);

    useEffect(() => {
        if (timer <= 0) return;

        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        redirect('/register/credential')
    };


    return (
        <article className="w-full max-w-md flex flex-col">
            <header className="flex flex-col mb-8">
                <section className="flex items-center gap-12 justify-between">
                    <h1 className="text-3xl font-bold mb-4 text-right">ثبت نام در آلفا</h1>
                    <BackPage />
                </section>
            </header>

            <section className="flex items-center justify-between mb-4">
                <p className="text-sm text-[#767676] mb-12">
                    کد تایید ارسال شده به <span className="text-[#7575FE]">{email}</span> را وارد کنید
                </p>
            </section>

            <span className="mb-4">کد تایید </span>
            <OtpField
                description=""
                length={5}
                isInvalid={false}
                errorMessage="کد وارد شده صحیح نیست."
            />
            <div className="flex flex-row gap-1">
                <ClientButton
                    label={String(timer)}
                    className="bg-[#7575FE30] text-[#7575FE] p-0 h-10"
                    svg={<HugeiconsIcon icon={TimeQuarter02Icon} />}
                    svgClassName="mr-0"
                />
                <span className="text-[#767676] text-xs mt-3">بعد از اتمام 2 دقیقه ارسال مجدد فعال میشود</span>
            </div>

            <form onSubmit={handleSubmit}>
                <ClientButton
                    type="submit"
                    className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-4"
                >
                    ارسال
                </ClientButton>
            </form>
        </article>
    );
};
