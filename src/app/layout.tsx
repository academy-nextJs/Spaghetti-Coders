import type { Metadata } from 'next';
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
      <body dir="rtl" className="px-12 py-4 overflow-x-hidden">
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}


