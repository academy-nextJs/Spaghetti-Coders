'use client';

import { Select, SelectItem } from '@heroui/react';

export function HeaderFastSelect() {
  return (
    <Select label="رزرو سریع" className='w-28' radius='full' size='sm'>
      <SelectItem>ویلا</SelectItem>
      <SelectItem>آپارتمان</SelectItem>
    </Select>
  );
}
export function HeaderOptionSelect() {
    return (
      <Select label="رهن و اجاره" className='w-28' radius='full' size='sm' >
        <SelectItem>ویلا</SelectItem>
        <SelectItem>آپارتمان</SelectItem>
      </Select>
    );
  }
  
