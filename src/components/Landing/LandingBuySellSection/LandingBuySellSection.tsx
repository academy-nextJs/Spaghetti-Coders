// import { ClockTimerIcon } from "@/src/assets/SGVs";
import { MyChip } from "../../common/Buttons/Chip-btn";
import LandingCarousel from "../LandingCarousel/LandingCarousel";
import { ClientButton } from "../../common/Buttons/common-btn";

export default function LandingBuySellSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] !font-black py-6 px-3">
          خرید و فروش
        </MyChip>
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-3xl">
            خرید و فروش های داغ<br /> 
            این هفته
          </h1>
          <ClientButton size="lg" className="bg-[#7575FE] text-white py-6 mr-auto inline-flex">مشاهده همه</ClientButton>
        </div>          
      </div>
      <LandingCarousel />
    </div>
  );
}