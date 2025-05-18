import '../globals.css';
import './layout.css';
import Header from '../../components/Layout/header/header';

export default function ReserveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-[calc(100%-5.5rem)] w-[88%] md:w-[95%] lg:w-[97%] m-auto">
      <Header />
      <main className='h-full mt-20'>{children}</main>
    </main>
  );
}