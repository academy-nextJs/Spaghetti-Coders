'use client';
import React, { useMemo } from 'react';
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
import { useSearchParams } from 'next/navigation';

export default function ModalSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState<
    'md' | '3xl' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | 'full'
  >('md');
  const sizes = ['3xl'] as const;
  const handleOpen = (size: string) => {
    setSize(size as 'md' | '3xl' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | 'full');
    onOpen();
  };
  
  const searchParams = useSearchParams();
  const queryValues = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return {
      location: params.get('location') || '',
      category: params.get('category') || '',
      order: params.get('order') || '',
      propertyType: params.get('propertyType') || '',
      transactionType: params.get('transactionType') || '',
      maxPrice: params.get('maxPrice') || '',
      minRent: params.get('minRent') || '',
    };
  }, [searchParams]);


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
            className="md:w-32 md:h-32 w-22 h-22 rounded-full text-md border-4 text-white border-white hover:bg-[#7575FE] bg-[#7575FE]"
          >
            <div className="flex flex-col md:text-sm text-xs justify-center">
              <HugeiconsIcon size={40} icon={Cursor02Icon} />
              جستجوی<br /> سریع
            </div>
          </Button>
        ))}
      </div>

      <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row gap-2">
                <ClientButton className="h-9 bg-[#7575FE] text-white">
                  رزرو ملک
                </ClientButton>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <div className="flex flex-row gap-5 mr-8">
                  <div className="flex flex-col w-[20rem]">
                    <span className="text-sm font-medium text-right pr-2">
                      محل مورد نظر
                    </span>
                    <SelectClient
                      items={cities}
                      placeholder="انتخاب کنید"
                      value={queryValues.location} 
                    />
                  </div>
                  <div className="flex flex-col w-[20rem]">
                    <span className="text-sm font-medium text-right">
                      نوع ملک
                    </span>
                    <SelectClient
                      items={cities}
                      placeholder="انتخاب کنید"
                      value={queryValues.propertyType} 
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-4 mr-8 font-medium">
                  <div className="flex flex-col w-1/2">
                    <span className="text-sm font-medium text-right mb-2">
                      حداقل اجاره
                    </span>
                    <ClientInput
                      value={queryValues.minRent} 
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <span className="text-sm font-medium text-right mb-2">
                      حداکثر اجاره
                    </span>
                    <ClientInput
                      value={queryValues.maxPrice} 
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-start mt-5">
                <Button onPress={onClose} className="rounded-full bg-[#F0F0F0] dark:bg-darkMode">
                  بستن
                </Button>
                <Button className="rounded-full bg-[#7575FE] text-white w-32">
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
