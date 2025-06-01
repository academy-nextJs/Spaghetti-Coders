import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './Providers';
import { ViewTransitions } from 'next-view-transitions';


export const metadata: Metadata = {
  title: 'ALFA',
  description: 'Alfa - Housing Marketplace',
};

const yekanFont = localFont({
  src: [
    {
      path: '../../public/fonts/IRANYekanXVFaNumVF.ttf',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html 
        suppressHydrationWarning 
        lang="en" 
        className='overflow-x-hidden'
      >
        <body
          dir="rtl"
          className={`${yekanFont.className} py-4 overflow-x-hidden`}
        >
          <Providers>
            {children}

            <div id="modal-root"></div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
