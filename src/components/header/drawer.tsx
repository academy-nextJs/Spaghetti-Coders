'use client';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from '@heroui/react';
import Link from 'next/link';
import DrawerAccordion from './drawerAccordion';

export function HeaderDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Drawer</Button>
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
