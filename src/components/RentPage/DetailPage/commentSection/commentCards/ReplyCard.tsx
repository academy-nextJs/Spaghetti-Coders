import { ClientButton } from "@/src/components/common/Buttons/common-btn"
import { Accordion, AccordionItem, Avatar } from "@heroui/react"
import { FavouriteCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function ReplyCard({Index, selectedKeys, setSelectedKeys, fullName= 'ناشناس', title= 'تایتل وارد نشده', caption= 'کپشن وارد نشده', rating= 'x' }) {
  console.log('selectedKeys ReplyCard', selectedKeys)
  return (
    <Accordion 
      selectedKeys={selectedKeys}
      // onSelectionChange={(keys) => console.log('onSelectionChange', keys) } 
      className={`p-0 w-fit flex-col gap-4 hidden has-[div[data-open="true"]]:flex`} 
      itemClasses={{ trigger: 'hidden' }}
      isCompact 
      hideIndicator 
      showDivider={false}
      selectionMode="multiple"
      selectionBehavior="toggle"
    >
      <AccordionItem key={Index}>
        <li className='flex gap-3 mr-10 before:content-[""] before:absolute before:w-0.5 before:h-[200%] before:bottom-0 before:-right-5 before:translate-x-1/2 before:bg-primaryPurple relative'>
          <aside>
            <Avatar src='' />
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
            </div>
          </main>
        </li>
      </AccordionItem>
    </Accordion>
  )
}