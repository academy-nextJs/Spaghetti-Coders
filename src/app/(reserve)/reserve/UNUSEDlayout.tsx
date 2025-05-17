'use client'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full" suppressHydrationWarning>
      <style jsx global>{`body { padding: 1rem; }`}</style>

      <section className="h-full flex">
        <main className="w-full flex items-center justify-center">
          {children}
        </main>

        {/* <SvgBlue /> */}
      </section>
    </main>
  );
}


