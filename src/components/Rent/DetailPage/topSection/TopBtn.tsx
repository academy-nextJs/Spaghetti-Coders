'use client';
import { addToast, useDisclosure } from '@heroui/react';
import {
  FavouriteIcon,
  Link02Icon,
  Share02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import dynamic from 'next/dynamic';
const ShareModal = dynamic(() => import('./ShareModal'));

export default function TopBtn({
  isReserved = false,
}: {
  isReserved?: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
  }
  return (
    <div className="flex justify-end items-center gap-2">
      <DetailIconWrapper onClick={onOpen}>
        <HugeiconsIcon icon={Share02Icon} />
      </DetailIconWrapper>
      {!isReserved && (
        <DetailIconWrapper onClick={() => {}}>
          <HugeiconsIcon icon={FavouriteIcon} />
        </DetailIconWrapper>
      )}
      <DetailIconWrapper
        onClick={() =>
          addToast({
            title: 'لینک کپی شد',
            color: 'secondary',
          })
        }
      >
        <HugeiconsIcon icon={Link02Icon} onClick={copyLink} />
      </DetailIconWrapper>
      <ShareModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
function DetailIconWrapper({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="rounded-full text-[#7575EF] p-2 border-1 border-[#7575EF] hover:bg-[#7575EF] hover:text-white transition-all duration-300 ease-in-out"
    >
      {children}
    </div>
  );
}
