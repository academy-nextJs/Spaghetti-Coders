import {  ArrowLeft02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

export function DashCreaitveButton() {
  return (
    <button
      className="bg-white m-auto dark:bg-black text-center w-42 rounded-3xl h-12 relative font-semibold group border-primaryPurple border-2"
      type="button"
    >
      <div className="bg-primaryPurple text-white rounded-3xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[158px] z-10 duration-500 transition-all">
        <HugeiconsIcon icon={ArrowLeft02Icon}/>
      </div>
      <p className="translate-x-2">مشاهده</p>
    </button>
  );
}
