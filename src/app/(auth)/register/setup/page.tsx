import { CredentialStep } from '@/src/components/auth/register/Step3';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'تکمیل اطلاعات کاربری',
    description: 'صفحه ثبت نام - بخش تکمیل اطلاعات کاربری',
};

export default function CredentialPage() {
    return <CredentialStep />
}