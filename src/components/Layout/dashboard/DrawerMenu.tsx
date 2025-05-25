'use client';
import { Drawer, DrawerContent, useDisclosure } from '@heroui/react';
import React from 'react';
import { ClientButton } from '../../common/Buttons/common-btn';

export default function DrawerMenu({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <ClientButton onPress={onOpen} >منو</ClientButton>
      <Drawer isOpen={isOpen} placement="bottom" onOpenChange={onOpenChange}>
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </>
  );
}
