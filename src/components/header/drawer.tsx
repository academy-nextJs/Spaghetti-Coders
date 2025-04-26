'use client';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@heroui/react';
import Link from 'next/link';
import DrawerAccordion from './drawerAccordion';
import HamburgerMenu from '@/src/assets/menu-burger.svg'
import Image from 'next/image';

export function HeaderDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
        <Image onClick={onOpen} src={HamburgerMenu.src} width={36} height={36} alt='menu'/>
      <Drawer
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.3 },
            },
            exit: {
              x: 100,
              opacity: 0,
              transition: { duration: 0.3 },
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {
            <>
              <DrawerHeader className="flex flex-col gap-1">منو</DrawerHeader>
              <DrawerBody>
                <Link href="/">خانه</Link>
                <Link href="">مقالات</Link>
                <Link href="">درباره آلفا</Link>
                <DrawerAccordion/>
              </DrawerBody>
            </>
          }
        </DrawerContent>
      </Drawer>
    </>
  );
}
