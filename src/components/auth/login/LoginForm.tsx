'use client';

import CommonInput from '../../common/inputs/input-btn';
import Btn from './ui/btn';
import Line from './ui/line';
import BackHome from './ui/back-home-btn';
import { useActionState } from 'react';
import { ClientButton } from '../../common/Buttons/common-btn';
import { credentialLoginAct } from '@/src/lib/actions/login/login-action';
import { TransitionLink } from '../../common/Links/TransitionLink';

const LoginForm = () => {
  const [actionState, formAction, isPending] = useActionState(
    credentialLoginAct,
    { message: {}, payload: new FormData() }
  );

  return (
    <section className="w-full max-w-md p-4">
      <header className="flex flex-col mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-4 text-right">خوش برگشتی!</h1>
          <BackHome />
        </div>
      </header>

      <p className="pb-4 mb-4 text-xs text-[#767676]">
        برای ورود به حساب کاربری آلفا میتوانید با اکانت گوگل یا اپل خود و یا با
        ایمیل و رمزعبور خود اقدام کنید
      </p>
      <Btn />
      <Line />
      <form action={formAction} className="space-y-4">
        <CommonInput
          name="email"
          type="email"
          label="ایمیل"
          className="font-bold rounded-full p-3 text-right bg-primaryGray dark:bg-transparent dark:border dark:border-gray-100"
          placeholder="ایمیل خود را وارد کنید"
          defaultValue={
            (actionState.payload.get('email') || undefined) as string
          }
          required
        />
        {actionState ? (
          <span className="text-red-400 text-sm mt-2">
            {actionState.message.email}
          </span>
        ) : null}

        <div className="mb-1">
          <div className="flex flex-row justify-between items-center mb-2">
            <label className="font-semibold">رمز عبور</label>

            <TransitionLink
              href="/forgot-password"
              className="text-sm text-primaryPurple underline"
            >
              فراموشی رمز عبور
            </TransitionLink>
          </div>
          <CommonInput
            name="password"
            type="password"
            className="font-bold rounded-full p-3 text-right bg-primaryGray dark:bg-transparent dark:border dark:border-gray-100 w-full"
            placeholder="رمزعبور خود را وارد کنید"
            defaultValue={
              (actionState.payload.get('password') || undefined) as string
            }
            required
          />
        </div>

        <ClientButton
          type="submit"
          className="w-full bg-primaryPurple text-white rounded-full py-3 mt-3"
          disabled={isPending}
        >
          ورود به حساب
        </ClientButton>
      </form>

      <footer className="flex justify-center gap-1 mt-4">
        <p className="text-sm text-gray-600">حساب کاربری ندارید؟</p>
        <TransitionLink href="/register" className="text-primaryPurple text-sm underline">
          ثبت نام در آلفا
        </TransitionLink>
      </footer>
    </section>
  );
};

export default LoginForm;
