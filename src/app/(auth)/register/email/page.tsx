import { EmailStep } from '@/src/components/auth/register/Step1';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'دریافت ایمیل',
    description: 'صفحه ثبت نام، استپ دریافت ایمیل',
};

export default function EmailPage() {
    return <EmailStep />
}