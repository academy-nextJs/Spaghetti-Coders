import { Accordion, AccordionItem } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

export default function DrawerAccordion() {
  return (
    <Accordion>
    <AccordionItem
      key="1"
      aria-label="رهن و اجاره"
      title="رهن و اجاره"
      classNames={{
        content: 'flex flex-col gap-2', // Stack children vertically with spacing
      }}
    >
      <Link href="">ویلا</Link>
      <Link href="">آپارتمان</Link>
    </AccordionItem>
    <AccordionItem
      key="2"
      aria-label="رزرو سریع"
      title="رزرو سریع"
      classNames={{
        content: 'flex flex-col gap-2', // Stack children vertically with spacing
      }}
    >
      <Link href="">ویلا</Link>
      <Link href="">آپارتمان</Link>
    </AccordionItem>
  </Accordion>
  )
}
