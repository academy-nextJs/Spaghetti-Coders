'use client';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@heroui/react';
import DrawerAccordion from './drawerAccordion';
import { ThemeSwitcher } from '../../ThemSwitcher';
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu03Icon } from '@hugeicons/core-free-icons';
import { TransitionLink } from '../../common/Links/TransitionLink';

export function HeaderDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <HugeiconsIcon icon={Menu03Icon} onClick={onOpen} width={36} height={36} />
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
                <ThemeSwitcher isMobile={true} />
                <TransitionLink href="/">خانه</TransitionLink>
                <TransitionLink href="">مقالات</TransitionLink>
                <TransitionLink href="">درباره آلفا</TransitionLink>
                <DrawerAccordion />
              </DrawerBody>
            </>
          }
        </DrawerContent>
      </Drawer>
    </>
  );
}
