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
      <header className="flex items-center justify-between w-full overflow-hidden">
        <Header />
      </header>
      <main>{children}</main>
      <footer className="rounded-3xl bg-[#F9F9F9] w-full px-7 py-8 flex flex-col gap-12">
        <FooterContainer />
      </footer>
    </main>
  );
}


