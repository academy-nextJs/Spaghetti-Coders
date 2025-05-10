'use client'


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full">
      <style jsx global>{`body { height: 100vh; padding: 1rem; }`}</style>

      <section className="h-full flex">
        <main className="w-full flex items-center justify-center">
          {children}
        </main>

        {/* <SvgBlue /> */}
      </section>
    </main>
  );
}


