'use client';

import { useRouter } from 'next/navigation';
import SelectClient from '../../common/SelectClient';

export function HeaderFastSelect() {
  const router = useRouter();

  const handleReserveRoot = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value;
    console.log(selectedKey);
    router.push(`/reserve`);
  };
  return (
    <SelectClient
      className="w-28"
      label="رزرو سریع"
      size="sm"
      classNames={{
        trigger: 'bg-primaryGray dark:bg-[#57534d]',
        label: 'dark:text-[#fff]',
      }}
      items={[
        { label: 'ویلا', key: 'ویلا' },
        { label: 'آپارتمان', key: 'آپارتمان' },
      ]}
      onChange={handleReserveRoot}
    />
  );
}
export function HeaderOptionSelect() {
  const router = useRouter();
  const handleRentRoot = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value;
    console.log(selectedKey);
    router.push(`/rent&mort`);
  };
  return (
    <SelectClient
      className="w-28"
      label="رهن و اجاره"
      size="sm"
      classNames={{
        trigger: 'bg-primaryGray dark:bg-[#57534d]',
        label: 'dark:text-[#fff]',
      }}
      items={[
        { label: 'ویلا', key: 'ویلا' },
        { label: 'آپارتمان', key: 'آپارتمان' },
      ]}
      onChange={handleRentRoot}
    />
  );
}
