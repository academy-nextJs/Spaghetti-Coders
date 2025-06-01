import { EmailStep } from '@/src/components/auth/register/Step1';
import { loginCheck } from '@/src/utils/errors/loginCheck';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'دریافت ایمیل',
    description: 'صفحه ثبت نام، استپ دریافت ایمیل',
};

export default async function EmailPage() {
    await loginCheck()
    return <EmailStep />
}