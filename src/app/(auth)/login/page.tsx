import { Metadata } from 'next';
import LoginForm from '@/src/components/auth/login/LoginForm';
import { auth } from '@/auth';

export const metadata: Metadata = {
    title: ' ورود',
    description: 'صفحه ورود',
};

export default async function LoginPage() {
    // const session = await getServerSession()
    // console.log('session', session)
    // if(session) throw new Error('شما در حال حاظر لاگین هستید، لطفا اول لاگ اوت کنید و سپس مجدد لاگین را امتحان کنید!')
    const session = await auth()
    console.log('session', session)
    if (session?.user) throw new Error("شما لاگین هستید")
    return <LoginForm />
}