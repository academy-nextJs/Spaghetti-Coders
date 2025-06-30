'use client';

import { updateUserImageAction } from '@/src/lib/actions/updateProfilePic';
import { addToast } from '@heroui/react';
import Image from 'next/image';
import React, { useActionState, useEffect, useState } from 'react';
import { ClientButton } from '../../common/Buttons/common-btn';

const initialState = { success: false, message: null };

export default function ProfilePicForm({ picture }: { picture: string }) {
  const [state, formAction] = useActionState(
    updateUserImageAction,
    initialState
  );

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);


  // Handle preview display
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
            setSelectedFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  useEffect(() => {
    if (state.message) {
      addToast({
        title: state.message,
        color: state.success ? 'secondary' : 'danger',
      });
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <Image
        className="rounded-full object-cover"
        alt="profile pic"
        width={200}
        height={200}
        src={
          previewUrl ||
          picture ||
          'https://avatars.githubusercontent.com/u/30373425?v=4'
        }
      />
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="profilePicture"
        name="profilePicture"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="profilePicture"
        className="cursor-pointer px-4 py-2 rounded-full bg-primaryPurple text-white text-sm w-fit hover:bg-primaryPurple/90 transition"
      >
        انتخاب تصویر جدید
      </label>

      {/* Optional: show selected file name */}
      {selectedFileName && (<>
        <p className="text-sm text-gray-500">
          فایل انتخاب‌شده: {selectedFileName}
        </p>
      <ClientButton type="submit" className="bg-primaryPurple text-white">
        اعمال تغییرات
      </ClientButton>
      </>
      )}
    </form>
  );
}
