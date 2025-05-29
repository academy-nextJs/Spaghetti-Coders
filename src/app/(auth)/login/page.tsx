import { Metadata } from 'next';
import LoginForm from '@/src/components/auth/login/LoginForm';
import { loginCheck } from '@/src/utils/errors/loginCheck';

export const metadata: Metadata = {
    title: ' ورود',
    description: 'صفحه ورود',
};

export default async function LoginPage() {
    await loginCheck()
    return <LoginForm />
}