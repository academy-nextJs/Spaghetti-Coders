import '../globals.css';
import Header from '../../components/header/header';
import FooterContainer from '../../components/footer/container';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <header className="flex items-center justify-between w-[97%] m-auto overflow-hidden">
        <Header />
      </header>
      <main className="w-[97%] m-auto">{children}</main>
      <footer className="rounded-3xl bg-[#F9F9F9] dark:bg-darkMode w-[97%] m-auto px-7 py-8 flex flex-col gap-12 mt-12">
        <FooterContainer />
      </footer>
    </main>
  );
}


