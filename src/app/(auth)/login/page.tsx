import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import LoginForm from '@/src/components/auth/login/LoginForm';

export const metadata: Metadata = {
    title: ' ورود',
    description: 'صفحه ورود',
};

export default async function LoginPage() {
    const session = await getServerSession()
    console.log('session', session)
    if(session) throw new Error('شما در حال حاظر لاگین هستید، لطفا اول لاگ اوت کنید و سپس مجدد لاگین را امتحان کنید!')
    return <LoginForm />
}