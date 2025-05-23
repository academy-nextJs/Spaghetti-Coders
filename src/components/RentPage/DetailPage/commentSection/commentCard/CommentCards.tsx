'use client'

import { ClientButton } from "@/src/components/common/Buttons/common-btn";
import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { ArrowDown01Icon, FavouriteCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function CommentCard({ setSelectedKeys, fullName= 'ناشناس', title= 'تایتل وارد نشده', caption= 'کپشن وارد نشده', rating= 'x' }) {
  return (
    <li className='flex gap-3'>
      <aside>
        <Avatar className="z-10" src='' />
      </aside>
      <main className='flex flex-col gap-1'>
        <span>{fullName} <span className='text-primaryPurple'>در</span> 25 اردیبهشت 1404</span>
        <p className='font-bold'>{title}</p>
        <p className=''>{caption}</p>
        <div className='flex gap-4'>
          <div className="w-fit flex gap-2 text-primaryPurple text-sm font-semibold leading-6">
            <span>{rating}</span>
            <HugeiconsIcon icon={FavouriteCircleIcon} />
          </div>
          <ClientButton className="text-primaryPurple w-fit h-full p-0 bg-transparet">پاسخ دادن</ClientButton>
          {setSelectedKeys && 
            <ClientButton className="text-gray-500 w-fit h-fit p-0 bg-transparet" onPress={() => setSelectedKeys(new Set(['1', '2']))}>
              مشاهده 12 پاسخ
              <HugeiconsIcon icon={ArrowDown01Icon} />
            </ClientButton>
          }
        </div>
      </main>
    </li>
  );
}

export function ReplyCard({ selectedKeys, setSelectedKeys }) {
  console.log('selectedKeys', selectedKeys.size)
  return (
    <Accordion 
      className={`p-0 w-fit flex-col gap-4 hidden has-[div[data-open="true"]]:flex`} 
      isCompact 
      hideIndicator 
      selectedKeys={selectedKeys} 
      onSelectionChange={setSelectedKeys} 
      showDivider={false}
      itemClasses={{ base: '', trigger: 'hidden' }}
    >
      <AccordionItem key='1'>
        <li className='flex gap-3 mr-10 before:content-[""] before:absolute before:w-0.5 before:h-[200%] before:bottom-0 before:-right-5 before:translate-x-1/2 before:bg-primaryPurple relative'>
          <aside>
            <Avatar src='' />
          </aside>
          <main className='flex flex-col gap-1'>
            <span>شایان نوری <span className='text-primaryPurple'>در</span> 25 اردیبهشت 1404</span>
            <p className='font-bold'>راضی نبودم ، چرت محض بود این هتل . 25 موقعیت پنالتی داشتیم نگرفتن برامون واقعا این چه وضعشه</p>
            <div className='flex gap-4'>
              <div className="w-fit flex gap-2 text-primaryPurple text-sm font-semibold leading-6">
                <span>4.5</span>
                <HugeiconsIcon icon={FavouriteCircleIcon} />
              </div>
              <ClientButton className="text-primaryPurple w-fit h-full p-0 bg-transparet">پاسخ دادن</ClientButton>
              {/* <ClientButton className="text-gray-500 w-fit h-fit p-0 bg-transparet" onPress={() => setSelectedKeys(new Set(['1']))}>
                مشاهده 12 پاسخ
                <HugeiconsIcon icon={ArrowDown01Icon} />
              </ClientButton> */}
            </div>
          </main>
        </li>
      </AccordionItem>
      <AccordionItem key='2'>
        <li className='flex gap-3 mr-10 before:content-[""] before:absolute before:w-0.5 before:h-[200%] before:bottom-0 before:-right-5 before:translate-x-1/2 before:bg-primaryPurple relative'>
          <aside>
            <Avatar src='' />
          </aside>
          <main className='flex flex-col gap-1'>
            <span>شایان نوری <span className='text-primaryPurple'>در</span> 25 اردیبهشت 1404</span>
            <p className='font-bold'>راضی نبودم ، چرت محض بود این هتل . 25 موقعیت پنالتی داشتیم نگرفتن برامون واقعا این چه وضعشه</p>
            <div className='flex gap-4'>
              <div className="w-fit flex gap-2 text-primaryPurple text-sm font-semibold leading-6">
                <span>4.5</span>
                <HugeiconsIcon icon={FavouriteCircleIcon} />
              </div>
              <ClientButton className="text-primaryPurple w-fit h-full p-0 bg-transparet">پاسخ دادن</ClientButton>
              {/* <ClientButton className="text-gray-500 w-fit h-fit p-0 bg-transparet" onPress={() => setSelectedKeys(new Set(['1']))}>
                مشاهده 12 پاسخ
                <HugeiconsIcon icon={ArrowDown01Icon} />
              </ClientButton> */}
            </div>
          </main>
        </li>
      </AccordionItem>
    </Accordion>
  )
}