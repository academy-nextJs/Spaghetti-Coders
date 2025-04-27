"use client";

import { useEffect, useRef, useState } from "react";
import { ClientButton } from "../../ClientUI";
import BackPage from "../login/ui/back-page";
import MultiInputOtp from "../../common/inputs/multi-input";

interface VerificationStepProps {
    email: string;
    onResendCode: () => void;
    onBack: () => void;
    onSubmit: () => void;
}

const VerificationStep = ({ email, onResendCode, onBack, onSubmit }: VerificationStepProps) => {
    const [verificationCode, setVerificationCode] = useState(["", "", "", "", ""]);
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

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleInputChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleResendCode = () => {
        setTimer(120);
        if (onResendCode) {
            onResendCode();
        }
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const code = verificationCode.join('');
    //     if (code.length !== 5) {
    //         alert("لطفا کد تأیید کامل را وارد کنید.");
    //         return;
    //     }
    //     console.log("Submitting verification code:", code);
    //     console.log("Calling onSubmit...");
    //     onSubmit();
    // };

    return (
        <div className="flex flex-col h-screen">
            <div className="max-w-md w-[800px] mx-auto px-6 py-12">
                <header className="flex flex-col mb-8">
                    <div className="flex items-center gap-12 justify-between">
                        <h1 className="text-3xl font-bold mb-4 text-right">ثبت نام در آلفا</h1>
                        <BackPage onClick={onBack} />
                    </div>
                </header>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-[#767676] mb-12">
                        کد تایید ارسال شده به <span className="text-[#7575FE]">{email}</span> را وارد کنید
                    </p>
                </div>
                <span className="mb-4">کد تایید </span>
                <form>
                    {/* <div className="flex justify-center gap-2 mb-8 dir-ltr">
                        {[0, 1, 2, 3, 4].map((index) => (
                            <MultiInputOtp
                                label="کد تایید"
                                key={index}
                                ref={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                value={verificationCode[index]}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                                className="w-14 h-14"
                            />
                        ))}
                    </div> */}
                    <div className="text-center mb-6">
                        <ClientButton
                            type="button"
                            onClick={handleResendCode}
                            disabled={timer > 0}
                            className={`text-sm bg-gray-200 mt-2 ${timer > 0 ? 'text-gray-400' : 'text-blue-600'}`}
                        >
                            {timer > 0 ? `ارسال مجدد کد تایید (${formatTime()})` : 'ارسال مجدد کد تایید'}
                        </ClientButton>
                    </div>

                    <ClientButton
                        type="submit"
                        className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-4"
                    >
                        ارسال
                    </ClientButton>
                </form>
            </div>
        </div>
    );
};

export default VerificationStep;