"use client"

import Image from 'next/image';
import FilterButton from './SearchButton';
import StatCard from './Card';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            type: 'spring',
            stiffness: 100
        }
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
        <div
            ref={ref}
            className="container h-1/3 mx-auto relative w-full max-w-full bg-white"
        >
            <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                    className="w-full md:w-1/2 flex justify-center items-center relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        style={{ y }}
                        className="w-full h-[530px] rounded-2xl relative"
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

                <div className="w-full flex justify-center md:w-1/2 px-6 mt-8 py-12 md:py-20 md:pl-24 lg:pl-20 z-10">
                    <div className="w-full h-full">
                        <motion.h4
                            className="text-right text-3xl font-bold text-gray-800 mb-2"
                            variants={textVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            transition={{ delay: 0.1 }}
                        >
                            خانه ای که میخوای،
                        </motion.h4>
                        <motion.h2
                            className="text-right text-3xl font-bold text-gray-800 mb-6"
                            variants={textVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            transition={{ delay: 0.2 }}
                        >
                            جایی که می‌خوای
                        </motion.h2>
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
            </div>
        </div>
    );
};

export default HeroSection;