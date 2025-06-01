import { useDisclosure } from '@heroui/react';
import { Settings01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';
import NotifSettingModal from '../NotifSettingModal';

export default function NotificationOption({
  onPopOverClose,
}: {
  onPopOverClose: () => void;
}) {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();
  return (
    <>
      <p
        className="flex gap-2 cursor-pointer"
        onClick={() => {
          onOpenModal();
          onPopOverClose();
        }}
      >
        <HugeiconsIcon icon={Settings01Icon} />
        تنظیمات نوتیفیکیشن
      </p>
      <NotifSettingModal
        isOpen={isOpenModal}
        onOpenChange={onModalOpenChange}
      />
    </>
  );
}
