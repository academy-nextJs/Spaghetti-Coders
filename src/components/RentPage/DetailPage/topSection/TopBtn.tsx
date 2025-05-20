'use client';
import { favouriteHouse } from '@/src/lib/actions/likeHouse-action';
import { addToast, useDisclosure } from '@heroui/react';
import {
  FavouriteIcon,
  Link02Icon,
  Share02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import dynamic from 'next/dynamic';
import { useActionState, useEffect } from 'react';
const ShareModal = dynamic(() => import('./ShareModal'));

export default function TopBtn({
  isReserved = false,
  id,
}: {
  isReserved?: boolean;
  id?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
  }
  const [res, action] = useActionState(favouriteHouse, undefined);
    useEffect(() => {
    if (res?.error) {
      addToast({
        title: res.error,
        color: 'danger',
      });
    }
  }, [res?.error]);
  return (
    <div className="flex justify-end items-center gap-2">
      <FormIconWrapper onClick={onOpen}>
        <HugeiconsIcon icon={Share02Icon} />
      </FormIconWrapper>
      {!isReserved && (
        <FormIconWrapper formAction={action} hiddenFields={{ house_id: id! }}>
          <HugeiconsIcon icon={FavouriteIcon} />
        </FormIconWrapper>
      )}
      <FormIconWrapper
        onClick={() =>
          addToast({
            title: 'لینک کپی شد',
            color: 'secondary',
          })
        }
      >
        <HugeiconsIcon icon={Link02Icon} onClick={copyLink} />
      </FormIconWrapper>
      <ShareModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
function FormIconWrapper({
  children,
  onClick = undefined,
  formAction = undefined,
  hiddenFields = {},
}: {
  children: React.ReactNode;
  onClick?: () => void;
  formAction?: (formData: FormData) => void;
  hiddenFields?: Record<string, string>;
}) {
  const handleAction = formAction
    ? async (formData: FormData) => {
        formAction(formData);
      }
    : undefined;

  const handleSubmit = onClick
    ? (e: React.FormEvent) => {
        e.preventDefault();
        onClick();
      }
    : undefined;

  return (
    <form action={handleAction} onSubmit={handleSubmit}>
      {formAction
        ? Object.entries(hiddenFields).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))
        : null}
      <button
        type="submit"
        className="rounded-full text-[#7575EF] p-2 border-1 border-[#7575EF] hover:bg-[#7575EF] hover:text-white transition-all duration-300 ease-in-out"
      >
        {children}
      </button>
    </form>
  );
}
