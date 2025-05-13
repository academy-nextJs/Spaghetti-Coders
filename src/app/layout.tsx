import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local'
import './globals.css';

export const metadata: Metadata = {
  title: 'ALFA',
  description: 'Alfa - Housing Marketplace',
};

const yekanFont = localFont({
  src: [{
    path: '../../public/fonts/IRANYekanXVFaNumVF.ttf',
  }]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className={`${yekanFont.className} py-4 overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}

          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
