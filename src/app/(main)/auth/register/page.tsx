import RegisterPage from '@/src/components/auth/register/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ثبت نام',
};

export default function Login() {
    return <div><RegisterPage /></div>;
}