// import { ClockTimerIcon } from "@/src/assets/SGVs";
import { MyChip } from "../../common/Buttons/Chip-btn";
import { ClientButton } from "../../common/Buttons/common-btn";
import api from "@/src/services/interceptors/server";
import { CardCarouselContainer } from "../../common/CardCarouselContainer/CardCarouselContainer";

export default async function LandingBuySellSection() {
  const { data } = await api.get('/houses?limit=8&sort=rate&order=DESC&transactionType=')
  if (!data) throw new Error('Failed to fetch Hot Houses, Please try again later.')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <MyChip
          size="lg"
          className="bg-transparent border border-primaryPurple text-primaryPurple !font-black py-6 px-3"
        >
          خرید و فروش
        </MyChip>
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-3xl">
            خرید و فروش های داغ<br />
            این هفته
          </h1>
          <ClientButton
            size="lg"
            className="bg-primaryPurple text-white py-6 mr-auto inline-flex"
          >
            مشاهده همه
          </ClientButton>
        </div>
      </div>
      <CardCarouselContainer data={data} />
    </div>
  );
}
