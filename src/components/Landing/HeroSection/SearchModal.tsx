'use client';
import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react';
import { ClientButton } from '../../common/Buttons/common-btn';
import { ClientInput } from '../../common/inputs/clientInput';
import SelectClient from '../../common/SelectClient';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cursor02Icon } from '@hugeicons/core-free-icons';
import { City } from '@/src/types/types';
import CustomCalendar from '../../common/Calender/CustomCalendar';

export default function ModalSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState<
    'md' | '3xl' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | 'full'
  >('md');
  const sizes = ['3xl'] as const;
  const handleOpen = (size: string) => {
    setSize(
      size as
        | 'md'
        | '3xl'
        | 'xs'
        | 'sm'
        | 'lg'
        | 'xl'
        | '2xl'
        | '4xl'
        | '5xl'
        | 'full'
    );
    onOpen();
  };
  const cities: City[] = [
    { key: 'babol', label: 'بابل' },
    { key: 'sari', label: 'ساری' },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button
            key={size}
            onPress={() => handleOpen(size)}
            className="md:w-32 md:h-32 w-22 h-22 rounded-full text-md border-4 text-white border-white hover:bg-primaryPurple bg-primaryPurple"
          >
            <div className="flex flex-col md:text-sm text-xs justify-center">
              <HugeiconsIcon size={40} icon={Cursor02Icon} />
              جستجوی
              <br /> سریع
            </div>
          </Button>
        ))}
      </div>

      <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row gap-2">
                <ClientButton className="h-9 bg-primaryPurple text-white">
                  رزرو ملک
                </ClientButton>
                <ClientButton className="h-9 bg-primaryGray text-black dark:bg-darkMode dark:text-white">
                  رهن و اجاره
                </ClientButton>
                <ClientButton className="h-9 bg-primaryGray text-black dark:bg-darkMode dark:text-white">
                  خرید و فروش
                </ClientButton>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <div className="flex flex-row gap-5 mr-8">
                  <div className=" w-1/2">
                    <span className="text-sm font-medium text-right pr-2">
                      انتخاب مقصد
                    </span>
                    <SelectClient items={cities} placeholder="انتخاب کنید" />
                  </div>
                  <div className=" w-1/2">
                    <span className="text-sm font-medium text-right">
                      تعداد نفرات
                    </span>
                    <ClientInput type="number" placeholder="انتخاب کنید" />
                  </div>
                </div>

                <div className="flex mt-4 mr-8 font-medium gap-5">
                  <div className="w-1/2">
                    <span className="text-sm font-medium text-right mb-2">
                      تاریخ ورود
                    </span>
                    <CustomCalendar />
                  </div>
                  <div className="w-1/2">
                    <span className="text-sm font-medium text-right mb-2">
                      تاریخ خروج
                    </span>
                    <CustomCalendar />
                  </div>
                </div>
              </ModalBody>

              <ModalFooter className="flex flex-row justify-start mt-5">
                <Button
                  onPress={onClose}
                  className="rounded-full bg-primaryGray dark:bg-darkMode"
                >
                  بستن
                </Button>
                <Button className="rounded-full bg-primaryPurple text-white w-32">
                  مشاهده نتیجه
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
