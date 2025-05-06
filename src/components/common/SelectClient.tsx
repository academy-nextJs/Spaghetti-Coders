'use client';
import { Select, SelectItem, SelectProps } from '@heroui/react';
type ItemObject = {
  key: string;
  label: string;
};
interface CustomSelectProps extends Omit<SelectProps, 'children' | 'items'> {
  items: ItemObject[]
}

export default function SelectClient({ items, ...props }: CustomSelectProps) {
  return (
    <Select
      size="lg"
      radius="full"
      classNames={{
        trigger: 'bg-[#F9F9F9] dark:bg-[#57534d]',
      }}
      {...props}
    >
      {items.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}
