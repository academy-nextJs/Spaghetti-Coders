import { Metadata } from 'next';
import LoginForm from '@/src/components/auth/login/LoginForm';
import { auth } from '@/auth';

export const metadata: Metadata = {
    title: ' ورود',
    description: 'صفحه ورود',
};

export default async function LoginPage() {
    const session = await auth()
    if (session?.user) throw new Error("شما لاگین هستید")
    return <LoginForm />
}