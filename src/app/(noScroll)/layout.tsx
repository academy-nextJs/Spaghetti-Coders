import '../globals.css';
// import './layout.css';
import Header from '../../components/Layout/header/header';

export default function ReserveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="h-[calc(100%-4.5rem)] w-[88%] md:w-[95%] lg:w-[97%] m-auto">
        <Header />
        <main id='mainMargin' className='h-full mt-18'>{children}</main>
      </main>
      <style scoped>{`
        @media screen and (min-width: 64rem) {
          body {
            height: 100vh;
            overflow: hidden !important;
          }
        }
      `}</style>
    </>
  );
}