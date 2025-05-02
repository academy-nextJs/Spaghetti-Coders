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
      <body dir="rtl" className="px-12 py-4 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}

          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
