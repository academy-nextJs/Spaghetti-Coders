import Link from "next/link";
import { ClientButton } from "../../ClientUI";
import CommonInput from "../../common/inputs/input-btn";
import Btn from "./ui/btn";
import Line from "./ui/line";
import BackHome from "./ui/back-home-btn";

const LoginForm = () => {
    return (
        <section className="w-full max-w-md p-4">
            <header className="flex flex-col mb-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold mb-4 text-right">خوش برگشتی!</h1>
                    <BackHome />
                </div>
            </header>

            <p className="pb-4 mb-4 text-xs text-[#767676]">
                برای ورود به حساب کاربری آلفا میتوانید با اکانت گوگل یا اپل خود و یا با ایمیل و رمزعبور خود اقدام کنید
            </p>
            <Btn />
            <Line />
            <main>
                <form className="space-y-4">
                    <CommonInput
                        type="email"
                        label="ایمیل"
                        className="font-bold rounded-full p-3 text-right bg-[#F0F0F0]"
                        placeholder="ایمیل خود را وارد کنید"
                    />
                    <div className="mb-1">
                        <div className="flex flex-row justify-between items-center mb-2">
                            <label className="font-semibold">رمز عبور</label>

                            <Link
                                href="/forgot-password"
                                className="text-sm text-[#7575FE] underline"
                            >
                                فراموشی رمز عبور
                            </Link>
                        </div>
                        <CommonInput
                            type="password"
                            className="font-bold rounded-full p-3 text-right bg-[#F0F0F0] w-full"
                            placeholder="رمزعبور خود را وارد کنید"
                        />
                    </div>

                    <ClientButton
                        type="submit"
                        className="w-full bg-[#7575FE] text-white rounded-full py-3 mt-3"
                    >
                        ورود به حساب
                    </ClientButton>
                </form>
            </main>

            <footer className="flex justify-center gap-1 mt-4">
                <p className="text-sm text-gray-600">حساب کاربری ندارید؟</p>
                <Link href="/auth/register" className="text-[#7575FE] text-sm underline">
                    ثبت نام در آلفا
                </Link>
            </footer>
        </section>
    );
};

export default LoginForm;