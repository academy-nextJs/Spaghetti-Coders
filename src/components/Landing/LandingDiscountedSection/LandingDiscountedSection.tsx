import { MyChip } from "../../common/Buttons/Chip-btn";
import LandingCarousel from "../LandingCarousel/LandingCarousel";
import { ClientButton } from "../../common/Buttons/common-btn";
import api from "@/src/services/api";
import { HugeiconsIcon } from "@hugeicons/react";
import { TimeQuarter02Icon } from "@hugeicons/core-free-icons";

export default async function LandingDiscountedSection() {
  const { data } = await api.get('/houses?limit=8&sort=price&order=DESC&transactionType=')
  if (!data) throw new Error('Failed to fetch Discounted Houses, Please try again later.')

  return (
    <div className="relative flex flex-col gap-6">
      <div className='absolute -top-28 -left-96 -z-10 w-[500px] aspect-square bg-radial from-[#7575fe96] to-white dark:from-[#7575fe3d] dark:to-[#7575fe45] blur-[100px]' />
      <div className="flex flex-col gap-4">
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] font-black py-6 px-3">
          تخفیفات
        </MyChip>
        <h1 className="font-bold text-3xl">
          تخفیفات ویژه <br />
          برای شروع بهار
        </h1>
        <div className="flex items-center gap-2">
          <MyChip size="lg" className="bg-[#FF5555] py-6 inline-flex">
            <span className="flex gap-2 items-center text-white">
              2:25:20
              <HugeiconsIcon icon={TimeQuarter02Icon} />
            </span>
          </MyChip>
          <div className="text-[#FF5555] inline-flex">
            فرصت رو<br />
            از دست نده
          </div>
          <ClientButton size="lg" className="bg-[#7575FE] text-white py-6 mr-auto inline-flex">مشاهده همه</ClientButton>
        </div>
      </div>
      <LandingCarousel data={data} discountedSection />
    </div>
  );
}