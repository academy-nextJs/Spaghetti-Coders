'use client';

import { FilterModalProps } from '@/src/types/types';
import { Select, SelectItem } from '@heroui/react';
import ReactDOM from 'react-dom';
import Calender from '../../common/Buttons/calender-btn';
import { ClientButton } from '../../common/Buttons/common-btn';
import CommonInput from '../../common/inputs/input-btn';

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-xs"
      onClick={handleBackgroundClick}
    >
      <aside className="w-[700px] rounded-xl bg-white p-6 shadow-xl relative">
        <aside className="flex flex-row gap-2 mb-6">
          <ClientButton className='h-9 bg-[#7575FE] text-white'>
            <div className='rounded-full bg-white w-2 h-2'></div>
            رهن و اجاره
          </ClientButton>
          <ClientButton className='h-9 bg-[#F0F0F0] text-black'>
            رزرو ملک
          </ClientButton>
          <ClientButton className='h-9 bg-[#F0F0F0] text-black'>
            خرید و فروش
          </ClientButton>
        </aside>

        <aside className='flex flex-row gap-6'>
          <aside className='flex flex-col w-1/2'>
            <span className="text-sm font-medium  text-right mb-2">انتخاب مقصد</span>
            <Select label=" انتخاب کنید " className='w-1//2' radius='full' size='sm' >
              <SelectItem>بابل</SelectItem>
              <SelectItem>ساری</SelectItem>
            </Select>
          </aside>

          <aside className='flex flex-col w-1/2'>
            <CommonInput
              label="تعداد نفرات"
              placeholder="وارد کنید"
              className='bg-[#f1f1f1] h-12 p-4  rounded-full'
            />
          </aside>
        </aside>
        <aside className='flex flex-row mt-4 font-medium gap-6'>
          <aside className='flex flex-col w-1/2'>
            <span className="text-sm font-medium text-right mb-2"> تاریخ ورود</span>
            <Calender />
          </aside>

          <aside className='flex flex-col w-1/2'>
            <span className="text-sm font-medium text-right mb-2"> تاریخ خروج</span>
            <Calender />
          </aside>
        </aside>

        <aside className="mt-6 flex">
          <ClientButton className='h-9 bg-[#7575FE] text-white'>
            مشاهده نتیجه
          </ClientButton>
        </aside>

      </aside>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default FilterModal;
