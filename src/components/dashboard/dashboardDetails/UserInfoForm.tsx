'use client';

import React, { useActionState, useEffect } from 'react';
import DashboardInput from '@/src/components/dashboard/dashboardDetails/DashboardInput';
import { updateUserAction } from '@/src/lib/actions/updateUser';
import { ClientButton } from '../../common/Buttons/common-btn';
import { addToast } from '@heroui/react';
type User = {
  id: string;
  role: 'buyer' | 'seller' | 'admin'; // Assuming there are other possible roles
  membershipDate: Date | null;
  email: string;
  phoneNumber: string;
  emailVerified: boolean;
  verificationCode: string;
  verificationCodeExpires: Date | string;
  fullName: string;
  firstName: string;
  lastName: string;
  profilePicture: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
};
const initialState = { success: false, message: null, fieldErrors: {} };
export default function UserInfoForm({ user }: { user: User }) {
  const [state, formAction] = useActionState(updateUserAction, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        addToast({
          title: state.message,
          color: 'secondary',
        });
      } else {
        addToast({
          title: state.message,
          color: 'danger',
        });
      }
    }
  }, [state.message, state.success]);
  return (
    <form action={formAction} className="xl:w-1/4 lg:2/5 md:3/5 sm:w-full flex flex-col gap-4">
      <DashboardInput
        name="fullName"
        label="نام کاربری :"
        initialValue={user.fullName}
        error={state.fieldErrors?.fullName}
      />
      <DashboardInput
        name="firstName"
        label="نام :"
        initialValue={user.firstName}
        error={state.fieldErrors?.firstName}
      />
      <DashboardInput
        name="lastName"
        label="نام خانوادگی :"
        initialValue={user.lastName ?? ''}
        error={state.fieldErrors?.lastName}
      />
      <DashboardInput
        name="email"
        label="ایمیل :"
        initialValue={user.email ?? ''}
        error={state.fieldErrors?.email}
      />
      <DashboardInput
        name="phoneNumber"
        label="شماره موبایل :"
        initialValue={user.phoneNumber ?? ''}
        error={state.fieldErrors?.phoneNumber}
      />
      <DashboardInput
        name="password"
        label="رمزعبور جدید :"
        initialValue=""
        error={state.fieldErrors?.password}
      />

      <ClientButton type="submit" className="bg-primaryPurple text-white">
        اعمال تغییرات
      </ClientButton>
      <ClientButton className="bg-transparent">انصراف</ClientButton>
    </form>
  );
}
