import { CredentialStep } from '@/src/components/auth/register/Step3';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ثبت نام - تایید ایمیل',
    description: 'صفحه ثبت نام - بخش دریافت کد تایید ایمیل',
};

export default function CredentialPage() {
    return <CredentialStep />
}