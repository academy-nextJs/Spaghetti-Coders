import { VerificationStep } from '@/src/components/auth/register/Step2';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ثبت نام - تایید ایمیل',
    description: 'صفحه ثبت نام - بخش دریافت کد تایید ایمیل',
};

export default function VerificationPage() {
    return <VerificationStep
                email={''}
                // onResendCode={handleResendCode}
                // onBack={handleBackFromVerification}
                // onSubmit={handleVerificationSubmit}
            />
}