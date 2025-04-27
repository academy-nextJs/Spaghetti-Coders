"use client";

import { useEffect, useRef, useState } from "react";
import { ClientButton } from "../../ClientUI";
import BackPage from "../login/ui/back-page";
import FromStep from "./Step3";
import { VerificationStepProps } from "@/src/types/types";

const VerificationStep = ({ email, onResendCode }: VerificationStepProps) => {
    const [timer, setTimer] = useState(120);
    const [showNextStep, setShowNextStep] = useState(false);
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

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleResendCode = () => {
        setTimer(120);
        if (onResendCode) {
            onResendCode();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowNextStep(true);
    };

    if (showNextStep) {
        return <FromStep />;
    }

    return (
        <main className="min-h-screen flex flex-col">
            <article className="max-w-md w-[800px] mx-auto px-6 py-12 flex-1">
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

                <form onSubmit={handleSubmit}>
                    <fieldset className="text-center mb-6">
                        <ClientButton
                            type="button"
                            onClick={handleResendCode}
                            disabled={timer > 0}
                            className={`text-sm bg-gray-200 mt-2 ${timer > 0 ? 'text-gray-400' : 'text-blue-600'}`}
                        >
                            {timer > 0 ? `ارسال مجدد کد تایید (${formatTime()})` : 'ارسال مجدد کد تایید'}
                        </ClientButton>
                    </fieldset>

                    <ClientButton
                        type="submit"
                        className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-4"
                    >
                        ارسال
                    </ClientButton>
                </form>
            </article>
        </main>
    );
};

export default VerificationStep;