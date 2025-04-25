import { InputProps } from "@heroui/react";


export type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export interface PersianInputProps extends Omit<InputProps, 'ref' | 'size'> {
  label?: string;
  customClass?: string;
  errorMessage?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}
