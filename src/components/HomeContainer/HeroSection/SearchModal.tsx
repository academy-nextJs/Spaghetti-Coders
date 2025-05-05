// import { FilterModalProps } from '@/src/types/types';
// import ReactDOM from 'react-dom';
// import Calender from '../../common/Calender/calender';
// import { ClientButton } from '../../common/Buttons/common-btn';
// import SelectClient from '../../common/SelectClient';
// import { ClientInput } from '../../common/inputs/clientInput';

// const SearchModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const handleBackgroundClick = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const cities = [
//     { key: 'babol', label: 'بابل' },
//     { key: 'sari', label: 'ساری' },
//   ];

//   return ReactDOM.createPortal(
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-gray-500"
//       onClick={handleBackgroundClick}
//     >
//       <div className="w-[700px] rounded-xl bg-[#E9E9E9] dark:bg-darkMode p-6 shadow-xl relative">
//         <div className="flex flex-row gap-2 mb-6">
//           <ClientButton className='h-9 bg-[#7575FE] text-white '>
//             <div className='rounded-full bg-white w-2 h-2'></div>
//             رهن و اجاره
//           </ClientButton>
//           <ClientButton className='h-9 bg-[#F0F0F0] text-black dark:bg-gray-800 dark:text-white'>
//             رزرو ملک
//           </ClientButton>
//           <ClientButton className='h-9 bg-[#F0F0F0] text-black dark:bg-gray-800 dark:text-white'>
//             خرید و فروش
//           </ClientButton>
//         </div>
//         <aside className='flex flex-row gap-6'>
//           <aside className='flex flex-col w-1/2'>
//             <span className="text-sm font-medium text-right mb-2">انتخاب مقصد</span>
//             <SelectClient
//               items={cities}
//               className="w-full"
//               placeholder="انتخاب کنید"
//             />
//           </aside>

//           <aside className='flex flex-col w-1/2'>
//           <span className="text-sm font-medium text-right mb-2">نفرات تعداد </span>
//             <ClientInput              
//               placeholder="وارد کنید"
//             />
//           </aside>
//         </aside>

//         <aside className='flex flex-row mt-4 font-medium gap-6'>
//           <aside className='flex flex-col w-1/2'>
//             <span className="text-sm font-medium text-right mb-2">تاریخ ورود</span>
//             <Calender />
//           </aside>

//           <aside className='flex flex-col w-1/2'>
//             <span className="text-sm font-medium text-right mb-2">تاریخ خروج</span>
//             <Calender />
//           </aside>
//         </aside>

//         <aside className="mt-6 flex">
//           <ClientButton className='h-9 bg-[#7575FE] text-white'>
//             مشاهده نتیجه
//           </ClientButton>
//         </aside>
//       </div>
//     </div>,
//     document.getElementById('modal-root') as HTMLElement
//   );
// };

// export default SearchModal;

"use client";

import React, { useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useDraggable,
} from "@heroui/react";
import { ClientButton } from "../../common/Buttons/common-btn";
import SelectClient from "../../common/SelectClient";
import { ClientInput } from "../../common/inputs/clientInput";
import { City } from "@/src/types/types";


export default function SearchModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const targetRef = useRef<HTMLDivElement>(null);
  const { moveProps } = useDraggable({ canOverflow: true, isDisabled: !isOpen });

  const cities: City[] = [
    { key: "babol", label: "بابل" },
    { key: "sari", label: "ساری" },
  ];

  return (
    <>
      <Button
        onPress={onOpen}
        className="w-28 h-28 rounded-full text-md border-4 text-white border-white hover:bg-[#7575FE] bg-[#7575FE]"
      >
        جستجو
        <br />
        سریع
      </Button>

      <Modal  ref={targetRef} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          <>
            <style jsx global>{`
              button[aria-label="Close"] {
                display: none !important;
              }
            `}</style>

            <ModalHeader {...moveProps} className="flex flex-row gap-1">
              <ClientButton className="h-9 bg-[#7575FE] text-white">
                رزرو ملک
              </ClientButton>
              <ClientButton className="h-9 bg-[#F0F0F0] text-black dark:bg-gray-800 dark:text-white">
                رهن و اجاره
              </ClientButton>
              <ClientButton className="h-9 bg-[#F0F0F0] text-black dark:bg-gray-800 dark:text-white">
                خرید و فروش
              </ClientButton>
            </ModalHeader>

            <ModalBody className="flex flex-row gap-4">
              <div className="flex flex-col w-1/2">
                <span className="text-sm font-medium text-right pr-2">انتخاب مقصد</span>
                <SelectClient items={cities} placeholder="انتخاب کنید" />
              </div>
              <div className="flex flex-col w-1/2">
                <span className="text-sm font-medium text-right">تعداد نفرات</span>
                <ClientInput placeholder="انتخاب کنید" />
              </div>
            </ModalBody>

            <ModalFooter className="flex flex-row justify-start gap-2">
              <Button className="bg-[#F0F0F0] text-black rounded-full">بستن</Button>
              <Button className="bg-[#7575FE] rounded-full text-white">مشاهده نتیجه</Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
