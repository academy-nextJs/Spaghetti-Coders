"use client"

import { useState } from "react";
import Link from "next/link";
import { ClientButton } from "../../ClientUI";
import CommonInput from "../../common/inputs/input-btn";
import BackHome from "../login/ui/back-home-btn";
import Btn from "../login/ui/btn";
import Line from "../login/ui/line";
import VerificationStep from "./Step2";

const FormStep1 = () => {
    const [step, setStep] = useState(1); // Step 1: Email, Step 2: Verification
    const [email, setEmail] = useState("");
    const [showLogin, setShowLogin] = useState(false); // حالت جدید برای نمایش صفحه ورود

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Validate email
        if (!email || !email.includes('@')) {
            alert('لطفا یک ایمیل معتبر وارد کنید.');
            return;
        }
        console.log("Sending verification code to:", email);
        // Move to step 2
        setStep(2);
    };

    const handleBackFromVerification = () => {
        setStep(1);
    };

    const handleResendCode = () => {
        console.log("Resending code to:", email);
    };

    const handleVerificationSubmit = () => {
        console.log("Verification submitted for email:", email);
        // در اینجا می‌توانید کاربر را به مرحله بعد هدایت کنید
    };

    if (showLogin) {
        return (
            <div className="flex flex-col h-screen">
                <div className="max-w-md w-full mx-auto px-6 py-12">
                    <header className="flex flex-col mb-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold mb-4 text-right">ورود به آلفا</h1>
                            <BackHome />
                        </div>
                    </header>
                    <p className="text-sm text-[#767676] text-right mb-8">
                        برای ورود به آلفا می‌توانید با اکانت گوگل یا اپل خود وارد شوید و یا با ایمیل و رمز عبور
                    </p>
                    <Btn />
                    <Line />
                    <form>
                        <CommonInput
                            type="email"
                            label="ایمیل"
                            className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] w-full"
                            placeholder="ایمیل خود را وارد کنید"
                            required
                        />
                        <CommonInput
                            type="password"
                            label="رمز عبور"
                            className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] w-full mt-4"
                            placeholder="رمز عبور خود را وارد کنید"
                            required
                        />
                        <ClientButton
                            type="submit"
                            className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-4"
                        >
                            ورود به حساب
                        </ClientButton>
                    </form>

                    <div className="flex gap-1 justify-center items-center mt-6 text-sm">
                        <span>حساب کاربری ندارید؟</span>
                        <button
                            onClick={() => setShowLogin(false)}
                            className="text-[#7575FE] underline"
                        >
                            ثبت نام
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 1) {
        return (
            <div className="flex flex-col h-screen">
                <div className="max-w-md w-full mx-auto px-6 py-12">
                    <header className="flex flex-col mb-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold mb-4 text-right">ثبت نام در آلفا</h1>
                            <BackHome />
                        </div>
                    </header>
                    <p className="text-sm text-[#767676] text-right mb-8">
                        برای ثبت نام در آلفا میتوانید با اکانت گوگل یا اپل خود وارد شوید و یا با ارسال کد
                        تایید به ایمیل خود اقدام کنید
                    </p>
                    <Btn />
                    <Line />
                    <form onSubmit={handleEmailSubmit}>
                        <CommonInput
                            type="email"
                            label="ایمیل"
                            className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] w-full"
                            placeholder="ایمیل خود را وارد کنید"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <ClientButton
                            type="submit"
                            className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-4"
                        >
                            ارسال کد تایید
                        </ClientButton>
                    </form>

                    <div className="flex gap-1 justify-center items-center mt-6 text-sm">
                        <span>حساب کاربری دارید؟</span>
                        <button
                            onClick={() => setShowLogin(true)}
                            className="text-[#7575FE] underline"
                        >
                            ورود به حساب
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 2) {
        return (
            <VerificationStep
                email={email}
                onResendCode={handleResendCode}
                onBack={handleBackFromVerification}
                onSubmit={handleVerificationSubmit}
            />
        );
    }
};

export default FormStep1;