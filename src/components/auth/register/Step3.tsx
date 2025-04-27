"use client";

import { ClientButton } from "../../ClientUI";
import CommonInput from "../../common/inputs/input-btn";
import BackHome from "../login/ui/back-home-btn";
const FromStep = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="max-w-md w-[800px] mx-auto px-6 py-12">
                <header className="flex flex-col mb-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold mb-4 text-right">ورود به آلفا</h1>
                        <BackHome />
                    </div>

                </header>
                <p className="text-sm mt-12 text-[#767676] flex text-right mb-8">
                    مشخصات خواسته شده را پر کنید
                </p>
                <div className="flex mt-5 flex-col">
                    <CommonInput
                        type="password"
                        label=" شماره همراه"
                        className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] w-full "
                        placeholder="شماره همراه  خود را وارد کنید"
                        required />
                    <CommonInput
                        type="password"
                        label="رمز عبور"
                        className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] w-full "
                        placeholder="رمز عبور خود را وارد کنید"
                        required />
                    <CommonInput
                        type="password"
                        label="تکرار رمز عبور "
                        className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] w-full "
                        placeholder="تکرار رمز عبور خود را وارد کنید"
                        required />

                    <ClientButton
                        type="submit"
                        className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-4"
                    >
                        ثبت نام
                    </ClientButton>
                </div>
            </div>
        </div>
    );
}




export default FromStep;