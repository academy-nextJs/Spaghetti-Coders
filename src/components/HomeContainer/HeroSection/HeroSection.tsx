'use client';

import Image from 'next/image';
import FilterButton from './SearchButton';
import StatCard from './Card';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
    },
  },
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className='flex justify-between'>

        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{ y }}
            className="w-full h-[565px] rounded-2xl relative"
          >
            <Image
              src="/hero.png"
              alt="Modern apartment building"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <motion.div
              className="absolute top-1/2 left-2.5 transform -translate-x-1/2 -translate-y-1/2"
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <FilterButton />
            </motion.div>
          </motion.div>
        </motion.div>

          <div className="w-full h-full">
            <motion.h4
              className="text-right text-3xl font-bold mb-2"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
            >
              خانه ای که میخوای،
              <br/>
              جایی که می‌خوای
            </motion.h4>
            <motion.p
              className="text-right text-[#767676] text-sm mb-8"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
            >
              رهن، اجاره، خرید و فروش ملک، مورد نظرتون
              <br />
              مثل آب خوردن فقط در دلتا
            </motion.p>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <StatCard />
            </motion.div>
          </div>
    </div>
  );
};

export default HeroSection;
