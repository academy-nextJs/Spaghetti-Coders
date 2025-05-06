import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

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
      <body dir="rtl" className="py-4 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="flex items-center justify-between w-[97%] m-auto overflow-hidden ">
            <Header />
          </header>
          <main className="w-[97%] m-auto">{children}</main>
          <footer className="rounded-3xl bg-[#F9F9F9] dark:bg-darkMode w-[97%] m-auto px-7 py-8 flex flex-col gap-12">
            <FooterContainer />
          </footer>

          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
