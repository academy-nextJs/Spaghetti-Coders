import { ClockTimerIcon } from "@/src/assets/SGVs";
import { MyChip } from "../../common/Buttons/Chip-btn";
import LandingCarousel from "../LandingCarousel/LandingCarousel";
import { ClientButton } from "../../common/Buttons/common-btn";

export default function LandingDiscountedSection() {
  return (
    <div className="relative flex flex-col gap-8">
      <div className='absolute -top-28 -left-96 -z-10 w-[500px] aspect-square bg-radial from-[#7575fe96] to-white blur-[100px]' />
      <div className="flex flex-col gap-4">
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] font-black py-6 px-3">
          تخفیفات
        </MyChip>
        <h1 className="font-bold text-3xl">
          تخفیفات ویژه <br/>
          برای شروع بهار
        </h1>
        <div className="flex items-center gap-2">
          <MyChip size="lg" className="bg-[#FF5555] py-6 inline-flex">
            <span className="flex gap-2 items-center text-white">
              2:25:20
              <ClockTimerIcon />
            </span>
          </MyChip>
          <div className="text-[#FF5555] inline-flex">
            فرصت رو<br/>
            از دست نده
          </div>
          <ClientButton size="lg" className="bg-[#7575FE] text-white py-6 mr-auto inline-flex">مشاهده همه</ClientButton>
        </div>
      </div>
      <LandingCarousel />
    </div>
  );
}