'use client'

import { ClientButton } from "@/src/components/common/Buttons/common-btn";
import { Avatar } from "@heroui/react";
import { ArrowDown01Icon, FavouriteCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { CommentCardsPropsType } from "@/src/types/types";

export function CommentCard({
  Index, 
  selectedKeys, 
  setSelectedKeys, 
  fullName = 'ناشناس', 
  title = 'تایتل وارد نشده', 
  caption = 'کپشن وارد نشده', 
  rating = 'x', 
  pic, 
  createdAt 
}: CommentCardsPropsType) {
  let isItemOpen: boolean | undefined
  if(Index) isItemOpen = selectedKeys?.has(Index)

  const handleAcordionState = () => {
    if(!setSelectedKeys || !Index) return

    if(!isItemOpen) {
      setSelectedKeys((prevSet: Set<string>) => new Set(prevSet).add(Index))
    } else {
      const manipulatedValueSet = new Set(selectedKeys)
      manipulatedValueSet.delete(Index)
      setSelectedKeys(manipulatedValueSet)
    }
  }
  
  return (
    <li className='flex gap-3'>
      <aside>
        <Avatar className="z-10" src={pic ?? undefined} />
      </aside>
      <main className='flex flex-col gap-1'>
        <span>{fullName}<span className='text-primaryPurple'> در </span>{createdAt}</span>
        <p className='font-bold'>{title}</p>
        <p className=''>{caption}</p>
        <div className='flex gap-4'>
          <div className="w-fit flex gap-2 text-primaryPurple text-sm font-semibold leading-6">
            <span>{rating}</span>
            <HugeiconsIcon icon={FavouriteCircleIcon} />
          </div>
          <ClientButton className="text-primaryPurple w-fit h-full p-0 bg-transparent">پاسخ دادن</ClientButton>
          {setSelectedKeys ?
            <ClientButton 
              className="text-gray-500 w-fit h-fit p-0 bg-transparent" 
              onPress={handleAcordionState}
            >
              مشاهده پاسخ
              <HugeiconsIcon icon={ArrowDown01Icon} className={isItemOpen ? '' : 'rotate-90'}/>
            </ClientButton>
          : null}
        </div>
      </main>
    </li>
  );
}