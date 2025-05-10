// import FormStep1 from '@/src/components/auth/register/Step1';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'ثبت نام',
    description: 'صفحه ثبت نام',
};

export default function RegisterPage() {redirect('/register/email')}