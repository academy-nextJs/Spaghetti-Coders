'use client'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full">
      <style jsx global>{`body { height: 100vh; overflow: hidden; }`}</style>
      {children}
    </main>
  );
}


