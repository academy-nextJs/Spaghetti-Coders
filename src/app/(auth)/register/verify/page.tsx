import { VerificationStep } from '@/src/components/auth/register/Step2';
import { loginCheck } from '@/src/utils/errors/loginCheck';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: 'تایید ایمیل',
    description: 'صفحه ثبت نام - بخش دریافت کد تایید ایمیل',
};

export default async function VerificationPage() {
    await loginCheck()
    const userEmail = (await cookies()).get('userEmail')?.value

    return <VerificationStep email={userEmail} />
}