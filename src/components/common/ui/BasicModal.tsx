'use client'
import { Modal, ModalBody, ModalContent, ModalHeader, ModalProps } from '@heroui/react'
import React from 'react'
interface BasicModalProps extends ModalProps {
  header?: React.ReactNode;
}

export default function BasicModal({header, children, ...props}: BasicModalProps) {
  return (
    <Modal size={props.size} isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
