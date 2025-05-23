'use client'

import { ClientButton } from "@/src/components/common/Buttons/common-btn";
import { Avatar } from "@heroui/react";
import { ArrowDown01Icon, FavouriteCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import type { Selection } from '@heroui/react'

export function CommentCard({Index, selectedKeys, setSelectedKeys, fullName= 'ناشناس', title= 'تایتل وارد نشده', caption= 'کپشن وارد نشده', rating= 'x' }) {
  console.log('Index CommentCard', Index)
  console.log('selectedKeys.has("3")', selectedKeys?.has('3'))

  const isItemOpen = selectedKeys?.has(Index)
  
  const handleAcordionState = () => {
    if(!isItemOpen) {
      setSelectedKeys((prevSet: Selection) => new Set(prevSet).add(Index))
    } else {
      const deletedValueSet = new Set(selectedKeys)
      deletedValueSet.delete(Index)
      console.log('deletedValueSet', deletedValueSet)
      setSelectedKeys(deletedValueSet)
    }
  }
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
          <ClientButton className="text-primaryPurple w-fit h-full p-0 bg-transparent">پاسخ دادن</ClientButton>
          {setSelectedKeys && 
            <ClientButton 
              className="text-gray-500 w-fit h-fit p-0 bg-transparent" 
              // onPress={() => {setSelectedKeys((prevSet) => prevSet.add(String(Index))); console.log(selectedKeys)}}
              // onPress={() => {setSelectedKeys(new Set(['3'])); console.log(selectedKeys)}}
              // onPress={() => setSelectedKeys((prevSet) => new Set(prevSet).add(String(Index)))}
              onPress={handleAcordionState}
            >
              مشاهده پاسخ
              <HugeiconsIcon icon={ArrowDown01Icon} className={isItemOpen ? '' : 'rotate-90'}/>
            </ClientButton>
          }
        </div>
      </main>
    </li>
  );
}