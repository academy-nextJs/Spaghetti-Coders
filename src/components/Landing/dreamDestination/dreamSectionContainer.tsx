'use client';
import React from 'react';
import { motion } from 'framer-motion';
import DreamSectionTop from './dreamSectionTop';
import DreamCarousel from './dreamCarousel';

export default function DreamSection() {
  return (
    <div className="rounded-3xl bg-[#F9F9F9] dark:bg-darkMode p-14 relative">
      <motion.div
        className="absolute top-16 -left-0 overflow-hidden"
        animate={{
          y: [-50, 100],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      >
        <div className="circle -ml-32"></div>
      </motion.div>
      <DreamSectionTop />
      <div className="-ml-[56px] mt-12">
        <DreamCarousel />
      </div>
      <div className="absolute bottom-0 right-0 rounded-3xl overflow-hidden">
        <div className="quarter-circle" />
      </div>
    </div>
  );
}
