import LoginForm from '@/src/components/auth/login/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: ' ورود',
    description: 'صفحه ورود',
};

export default function LoginPage() {
    return (
        <section className="w-full md:w-1/2 flex items-center justify-center">
            <LoginForm />
        </section>
    )
}