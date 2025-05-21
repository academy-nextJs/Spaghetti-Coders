import { MyChip } from "@/src/components/common/Buttons/Chip-btn";
import { ClientButton } from "@/src/components/common/Buttons/common-btn";
import { ClientUser } from "@/src/components/common/UserAvatar/ClientUser";
import { ArrowDown01Icon, FavouriteCircleIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function DetailCommentContainer() {
  return (
    <section className="max-w-full md:max-w-1/2 flex flex-col gap-12">
      <div className="flex gap-4">
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] px-3">
          نظرات کاربران
        </MyChip>
        <ClientButton size="lg" className="bg-transparent text-[#7575FE] px-1">
          <HugeiconsIcon icon={PlusSignIcon} />
          نظر شما
        </ClientButton>
      </div>
      <ul className="p-6 bg-">
        <li className='flex gap-2'>
          <aside>
            <ClientUser avatarProps={{src: ''}} name={null} />
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
              <ClientButton className="text-gray-500 w-fit h-fit p-0 bg-transparet">
                مشاهده 12 پاسخ
                <HugeiconsIcon icon={ArrowDown01Icon} />
              </ClientButton>
            </div>
          </main>
        </li>
      </ul>
    </section>
  );
}