import LoginPage from '@/src/components/auth/login/Page';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: ' ورود',
    description: 'صفحه ورود',
};

export default function Login() {
    return <LoginPage />;
}