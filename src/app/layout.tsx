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
    <html lang="en">
      <body dir="rtl" className="py-4 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}

          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
