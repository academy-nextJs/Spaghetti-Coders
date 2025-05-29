import { CredentialStep } from '@/src/components/auth/register/Step3';
import { loginCheck } from '@/src/utils/errors/loginCheck';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'تکمیل اطلاعات کاربری',
    description: 'صفحه ثبت نام - بخش تکمیل اطلاعات کاربری',
};

export default async function CredentialPage() {
    await loginCheck()
    return <CredentialStep />
}