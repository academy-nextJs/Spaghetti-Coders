import Header from '../../components/Layout/header/header';
import FooterContainer from '../../components/Layout/footer/container';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-[88%] md:w-[95%] lg:w-[97%] m-auto">
      <Header />
      <main className='mt-20'>{children}</main>
      <footer className="rounded-3xl bg-[#F9F9F9] dark:bg-darkMode m-auto px-7 py-8 flex flex-col gap-12 mt-12">
        <FooterContainer />
      </footer>
    </main>
  );
}