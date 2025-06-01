'use client'

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Revealer() {
  const pathname = usePathname()
  return (
    <motion.div 
      key='revealer'
      className="fixed top-0 left-0 w-screen h-screen origin-[top_center] bg-primaryPurple pointer-events-none z-[100] flex justify-center items-center"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 1.25,
        delay: 1,
        ease: [0.9, 0, 0.1, 1]
      }}
    >
      <span className="font-mono font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-l from-primaryPurple via-white to-white">
        {pathname.slice(1)}
      </span>
    </motion.div>
  );
}