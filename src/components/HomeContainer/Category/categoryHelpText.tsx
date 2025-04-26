"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function CategoryHelpText() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.p
        className="text-3xl font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={titleVariants}
      >
        هر ملکی بخوای
        <br />
        اینجا پیدا میشه!
      </motion.p>

      <motion.p
        className="text-[#555555]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={descriptionVariants}
      >
        با کلیک به روی هر دسته بندی می توانید تمام آگهی
        <br />
        مربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید
      </motion.p>
    </>
  );
}