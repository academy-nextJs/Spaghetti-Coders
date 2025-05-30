'use client';
import { ClientButton } from '../Buttons/common-btn';
import { Select, SelectItem } from '@heroui/react';
import CustomSlider from '../Range-slider/range-slider';
import { HugeiconsIcon } from '@hugeicons/react';
import { Delete02Icon } from '@hugeicons/core-free-icons';

export default function FilterPanel() {
  return (
    <div className="p-6 bg-white rounded-l-3xl rounded-r-none w-full border-1 border-gray-200 h-[600px] max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl">فیلتر ها</h2>
        <ClientButton
          startContent={<HugeiconsIcon icon={Delete02Icon} />}
          className="text-red-500 text-sm flex bg-white items-center"
        >
          حذف همه
        </ClientButton>
      </div>

      <div className="mt-2 flex flex-row gap-4">
        <div className="w-1/2">
          <div className="mb-2 mt-8 text-xs font-bold text-black">
            مقصد یا هتل شما
          </div>
          <Select
            label=" انتخاب کنید "
            className="w-full"
            radius="full"
            size="sm"
          >
            <SelectItem>بابل</SelectItem>
            <SelectItem>ساری</SelectItem>
          </Select>
        </div>
        <div className="w-1/2">
          <div className="mb-2 mt-8 text-xs font-bold text-black">
            مرتب سازی بر اساس
          </div>
          <Select
            label=" انتخاب کنید "
            className="w-full"
            radius="full"
            size="sm"
          >
            <SelectItem>بابل</SelectItem>
            <SelectItem>ساری</SelectItem>
          </Select>
        </div>
      </div>

      <div className="mb-2 mt-6 font-medium text-sm">قیمت</div>

      <div className="flex justify-between mb-2">
        <div className="text-xs text-gray-500">قیمت از ۱,۵۰۰,۰۰۰ تومان</div>
        <div className="text-xs text-gray-500">قیمت از ۱,۵۰۰,۰۰۰ تومان</div>
      </div>

      <div className="relative mb-6 mt-2">
        <CustomSlider />
      </div>

      <div className="mb-4 flex flex-row gap-4">
        <div className="w-1/2">
          <div className="mb-2 mt-2 text-xs font-bold text-black">
            امکانات هتل
          </div>
          <Select
            label=" انتخاب کنید "
            className="w-full"
            radius="full"
            size="sm"
          >
            <SelectItem>بابل</SelectItem>
            <SelectItem>ساری</SelectItem>
          </Select>
        </div>
        <div className="w-1/2">
          <div className="mb-2 mt-2 text-xs font-bold text-black">
            امتیاز هتل
          </div>
          <Select
            label=" انتخاب کنید "
            className="w-full"
            radius="full"
            size="sm"
          >
            <SelectItem>بابل</SelectItem>
            <SelectItem>ساری</SelectItem>
          </Select>
        </div>
      </div>

      <div className="flex gap-4 w-full mt-8 justify-start">
        <ClientButton className="w-1/5 bg-gray-100 text-gray-800 py-2 px-4 rounded-full">
          بستن
        </ClientButton>
        <ClientButton className="w-1/3 bg-primaryPurple text-white text-sm py-2 px-4 rounded-full">
          مشاهده نتیجه
        </ClientButton>
      </div>
    </div>
  );
}
