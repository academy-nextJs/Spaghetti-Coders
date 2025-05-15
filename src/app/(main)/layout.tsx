import '../globals.css';
import Header from '../../components/header/header';
import FooterContainer from '../../components/footer/container';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="md:w-[95%] lg:w-[97%] w-[88%] m-auto">
      <header className="flex items-center justify-between m-auto overflow-hidden relative mb-12">
        <Header />
      </header>
      <main >{children}</main>
      <footer className="rounded-3xl bg-[#F9F9F9] dark:bg-darkMode m-auto px-7 py-8 flex flex-col gap-12 mt-12">
        <FooterContainer />
      </footer>
    </main>
  );
}


