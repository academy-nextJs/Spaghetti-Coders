import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
} from '@heroui/react';
import {
  InstagramIcon,
  Mail01Icon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

export default function ShareModal({
  isOpen,
  onClose,
}: Omit<ModalProps, 'children'>) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalContent>
        <ModalHeader>اشتراک گذاری</ModalHeader>
        <ModalBody>
          <div className="flex gap-4 justify-center">
            <div className="cursor-pointer text-[#1DA1F2] flex flex-col items-center">
              <HugeiconsIcon icon={TwitterIcon} size={36} />
              توئیتر
            </div>
            <div className="cursor-pointer text-[#25D366] flex flex-col items-center">
              <HugeiconsIcon icon={WhatsappIcon} size={36} />
              واتساپ
            </div>
            <div className="cursor-pointer text-[#0088cc] flex flex-col items-center">
              <HugeiconsIcon icon={TelegramIcon} size={36} />
              تلگرام
            </div>
            <div className="cursor-pointer text-[#E4405F] flex flex-col items-center">
              <HugeiconsIcon icon={InstagramIcon} size={36} />
              اینستاگرام
            </div>
            <div className="cursor-pointer text-[#720E9E] flex flex-col items-center">
              <HugeiconsIcon icon={Mail01Icon} size={36}/>
              ایمیل
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
