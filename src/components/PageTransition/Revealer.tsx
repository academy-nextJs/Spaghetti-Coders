'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from '@/public/AlFA.svg';


export function Revealer() {
  const pathname = usePathname()
  return (
    <motion.div 
      key='revealer'
      className="fixed top-0 left-0 w-screen h-screen origin-[top_center] bg-primaryPurple pointer-events-none z-[100] flex flex-row-reverse justify-center items-center"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 1.25,
        delay: 1,
        ease: [0.9, 0, 0.1, 1]
      }}
    >
      <Image
        className="justify-center dark:invert-100 size-[12rem]"
        src={Logo.src}
        alt="Logo"
        width={78}
        height={78}
      />
      <span className="font-mono font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-l from-transparent via-white to-white">
        {pathname.slice(1)}
        {"/"}
      </span>
    </motion.div>
  );
}