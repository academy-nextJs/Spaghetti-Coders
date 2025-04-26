'use client';

import { usePathname } from 'next/navigation';
import Header from './header/header';
import { ReactNode } from 'react';
import FooterContainer from './footer/container';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname.startsWith('/auth');

    return (
        <>
            {!isAuthPage && (
                <header className="flex items-center justify-between w-full overflow-hidden">
                    <Header />
                </header>
            )}
            <main>{children}</main>
            {!isAuthPage && (
                <footer className="rounded-3xl bg-[#F9F9F9] w-full px-7 py-8 flex flex-col gap-12">
                    <FooterContainer />
                </footer>
            )}
        </>
    );
}