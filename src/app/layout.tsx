import type { Metadata } from 'next';
import './globals.css';

import Header from '../components/header/header';
import FooterContainer from '../components/footer/container';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'ALFA',
  description: 'Alfa - Housing Marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl" className="px-12 py-4 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="flex items-center justify-between w-full overflow-hidden ">
            <Header />
          </header>
          <main>{children}</main>
          <footer className="rounded-3xl bg-[#F9F9F9] dark:bg-darkMode w-full px-7 py-8 flex flex-col gap-12">
            <FooterContainer />
          </footer>

          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
