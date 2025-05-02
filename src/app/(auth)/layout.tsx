'use client'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full flex flex-col justify-center">
      <style jsx global>{`body { height: 100vh; overflow: hidden; }`}</style>
      {children}
    </main>
  );
}


