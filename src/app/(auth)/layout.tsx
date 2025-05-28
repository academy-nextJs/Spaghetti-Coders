'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/AlFA.svg';
import SwiperSlider from "@/src/components/common/Auth/SwiperSlider";
// import './layout.css'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="h-full">
        <section className="h-full flex">
          <main className="w-full md:w-1/2 flex items-center justify-center">
            {children}
          </main>

          <Link href='/'>
            <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 top-15 z-10 dark:invert-100'>
              <Image
                className="relative z-10"
                src={Logo.src}
                alt="Logo"
                width={78}
                height={78}
              />
              <Image
                className="absolute left-0 top-0 h-full w-1/2 object-left object-cover invert z-20"
                src={Logo.src}
                alt="Logo"
                width={78}
                height={78}
                />
            </div>
          </Link>

          <SwiperSlider />
          
          {/* Gradiants */}
          <div className="quarter-circle absolute bottom-0 right-0" />
          <div className="circle size-[35rem]! absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 -z-10" />
        </section>
      </main>
      <style scoped>{`
        body { 
          height: 100vh; 
          overflow: hidden; 
          padding: 1rem; 
        }
      `}</style>
    </>
  );
}


