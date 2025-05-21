import { MyChip } from "@/src/components/common/Buttons/Chip-btn";
import { CardCarouselContainer } from "@/src/components/common/CardCarouselContainer/CardCarouselContainer";
import api from "@/src/services/api";

export async function SimilarAdsContainer() {
  const { data } = await api.get('/houses?limit=8&sort=rate&order=DESC&transactionType=')
  if (!data) throw new Error('Failed to fetch Hot Houses, Please try again later.')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] !font-black py-6 px-3">
          آگهی های مشابه
        </MyChip>
      </div>
      <CardCarouselContainer data={data} />
    </div>
  );
}