'use client'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import GalleryThumbnail from './GalleryThumbnail';
import { AllPhotosType } from '@/src/types/types';

export default function GalleryModal({ allPhotos }: AllPhotosType) {
    const router = useRouter()
  return (
    <>
      <Modal isOpen={true} onClose={()=> router.back()} size='5xl' scrollBehavior='inside'>
        <ModalContent>
            <ModalHeader>
                گالری تصاویر
            </ModalHeader>
          <ModalBody>
            <GalleryThumbnail allPhotos={allPhotos} isModal={true} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
