'use client';

import PersianSelect from '../common/Buttons/select-btn';

export function HeaderFastSelect() {
  return (
    <PersianSelect
    label="رزرو سریع"
    className="w-28"
    options={[
      { label: 'ویلا', value: 'ویلا' },
      { label: 'آپارتمان', value: 'آپارتمان' },
    ]}
    onChange={(value) => console.log(value)}
    size='sm'
  />
  );
}
export function HeaderOptionSelect() {
  return (
    <PersianSelect
      label="رهن و اجاره"
      className="w-28"
      options={[
        { label: 'ویلا', value: 'ویلا' },
        { label: 'آپارتمان', value: 'آپارتمان' },
      ]}
      onChange={(value) => console.log(value)}
      size='sm'
    />
  );
}

