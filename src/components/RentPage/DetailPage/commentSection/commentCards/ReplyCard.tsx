'use client'

import { ClientButton } from "@/src/components/common/Buttons/common-btn"
import { CommentCardsPropsType } from "@/src/types/types"
import { Accordion, AccordionItem, Avatar } from "@heroui/react"
import { FavouriteCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function ReplyCard({
  Index, 
  selectedKeys, 
  fullName= 'ناشناس', 
  title= 'تایتل وارد نشده', 
  caption= 'کپشن وارد نشده', 
  rating= 'x', 
  pic,
  createdAt,
}: CommentCardsPropsType) {
  return (
    <Accordion 
      selectedKeys={selectedKeys}
      className={`p-0 flex-col gap-4 hidden has-[div[data-open="true"]]:flex`}
      itemClasses={{ trigger: 'hidden' }}
      isCompact
      hideIndicator
      showDivider={false}
    >
      <AccordionItem key={Index}>
        <li className='flex gap-3 mr-12 before:content-[""] before:absolute before:w-0.5 before:h-[200%] before:bottom-0 before:-right-7 before:translate-x-1/2 before:bg-primaryPurple relative'>
          <aside>
            <Avatar src={pic ?? undefined} />
          </aside>
          <main className='flex flex-col gap-2'>
            <span>{fullName}<span className='text-primaryPurple'> در </span>{createdAt}</span>
            <p className='font-bold'>{title}</p>
            <p className=''>{caption}</p>
            <div className='flex gap-4'>
              <div className="w-fit flex gap-2 text-primaryPurple text-sm font-semibold leading-6">
                <span>{rating}</span>
                <HugeiconsIcon icon={FavouriteCircleIcon} />
              </div>
              <ClientButton className="text-primaryPurple w-fit h-full p-0 bg-transparet">پاسخ دادن</ClientButton>
            </div>
          </main>
        </li>
      </AccordionItem>
    </Accordion>
  )
}