"use client"

import React from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { ClientButton } from "../../common/Buttons/common-btn";
import { ClientInput } from "../../common/inputs/clientInput";
import SelectClient from "../../common/SelectClient";
import Calender from "../../common/Calender/calender";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cursor02Icon } from "@hugeicons/core-free-icons";
import { City } from "@/src/types/types";

export default function ModalSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["3xl"];

  const handleOpen = (size: string) => {
    setSize(size);
    onOpen();
  };

  const cities: City[] = [
    { key: "babol", label: "بابل" },
    { key: "sari", label: "ساری" },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button
            key={size}
            onPress={() => handleOpen(size)}
            className="w-32 h-32 rounded-full text-md border-4 text-white border-white hover:bg-[#7575FE] bg-[#7575FE]"
          >
            <div className="flex flex-col text-sm justify-center">
              <HugeiconsIcon icon={Cursor02Icon} size={45} className="pr-2" />
              جستجوی
              <br />
              سریع
            </div>
          </Button>
        ))}
      </div>

      <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row gap-2">
                <ClientButton className="h-9 bg-[#7575FE] text-white">رزرو ملک</ClientButton>
                <ClientButton className="h-9 bg-[#F0F0F0] text-black dark:bg-darkMode dark:text-white">رهن و اجاره</ClientButton>
                <ClientButton className="h-9 bg-[#F0F0F0] text-black dark:bg-darkMode dark:text-white">خرید و فروش</ClientButton>
              </ModalHeader>

              <ModalBody className="flex flex-col gap-4">
                <div className="flex flex-row gap-5 mr-8">
                  <div className="flex flex-col w-[20rem]">
                    <span className="text-sm font-medium text-right pr-2">انتخاب مقصد</span>
                    <SelectClient items={cities} placeholder="انتخاب کنید" />
                  </div>
                  <div className="flex flex-col w-[20rem]">
                    <span className="text-sm font-medium text-right">تعداد نفرات</span>
                    <ClientInput placeholder="انتخاب کنید" />
                  </div>
                </div>

                <div className="flex flex-row mt-4 mr-8 font-medium">
                  <div className="flex flex-col w-1/2">
                    <span className="text-sm font-medium text-right mb-2">تاریخ ورود</span>
                    <Calender />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <span className="text-sm font-medium text-right mb-2">تاریخ خروج</span>
                    <Calender />
                  </div>
                </div>
              </ModalBody>

              <ModalFooter className="flex flex-row justify-start mt-5">
                <Button onPress={onClose} className="rounded-full bg-[#F0F0F0] dark:bg-darkMode">
                  بستن
                </Button>
                <Button onPress={onClose} className="rounded-full bg-[#7575FE] text-white w-32">
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
