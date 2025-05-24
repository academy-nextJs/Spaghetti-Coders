'use client';

import { useActionState } from 'react';
import CommonInput from '../../common/inputs/input-btn';
import BackPage from '../login/ui/back-page';
import { registerSetup } from '@/src/lib/actions/register/register-setup-action';
import { ClientButton } from '../../common/Buttons/common-btn';

export const CredentialStep = () => {
  const [actionState, formAction, isPending] = useActionState(registerSetup, {
    message: {},
    payload: new FormData(),
  });
  return (
    // <div className="flex flex-col h-screen">
    <article className="max-w-md w-full">
      <header className="flex flex-col mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-4 text-right">
            ثبت نام در آلفا
          </h1>
          <BackPage />
        </div>
      </header>
      <p className="text-sm mt-12 text-[#767676] flex text-right mb-8">
        مشخصات خواسته شده را پر کنید
      </p>
      <form action={formAction} className="mt-5 flex flex-col gap-3">
        <CommonInput
          name="phoneNumber"
          type="tel"
          label="شماره همراه"
          className="font-bold rounded-full p-3 text-right bg-primaryGray dark:bg-transparent dark:border dark:border-gray-100 w-full "
          placeholder="شماره همراه خود را وارد کنید"
          defaultValue={
            (actionState.payload.get('phoneNumber') || undefined) as string
          }
          required
        />
        {actionState ? (
          <span className="text-red-400 text-sm mt-2">
            {actionState.message.phoneNumber}
          </span>
        ) : null}
        <CommonInput
          name="password"
          type="password"
          label="رمز عبور"
          className="font-bold rounded-full p-3 text-right bg-primaryGray dark:bg-transparent dark:border dark:border-gray-100 w-full "
          placeholder="رمز عبور خود را وارد کنید"
          defaultValue={
            (actionState.payload.get('password') || undefined) as string
          }
          required
        />
        {actionState ? (
          <span className="text-red-400 text-sm mt-2">
            {actionState.message.password}
          </span>
        ) : null}
        <CommonInput
          name="passwordRepeat"
          type="password"
          label="تکرار رمز عبور "
          className="font-bold rounded-full p-3 text-right bg-primaryGray dark:bg-transparent dark:border dark:border-gray-100 w-full "
          placeholder="تکرار رمز عبور خود را وارد کنید"
          defaultValue={
            (actionState.payload.get('passwordRepeat') || undefined) as string
          }
          required
        />
        {actionState ? (
          <span className="text-red-400 text-sm mt-2">
            {actionState.message.passwordRepeat}
          </span>
        ) : null}

        <ClientButton
          type="submit"
          className="w-full bg-primaryPurple text-white rounded-full py-3 mt-4"
          disabled={isPending}
        >
          ثبت نام
        </ClientButton>
      </form>
    </article>
    // </div>
  );
};
