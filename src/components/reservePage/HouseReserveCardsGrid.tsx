import { Ref } from "react";
import LandingHouseCard from "../Landing/LandingHouseCard/LandingHouseCard";

export default function HouseReserveCardsGrid({ ref }: { ref: Ref<HTMLElement> | undefined}) {
  return (
    <section ref={ref} className="w-fit grid max-sm:grid-cols-1! max-md:grid-cols-2! max-lg:grid-cols-3! lg:grid-cols-2 gap-8">
      {Array(10).fill(null).map((_, index) =>
        <LandingHouseCard
          key={index}
          title="HouseHouse"
          address="Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran"
          photos={[
            "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=2048x2048&w=is&k=20&c=akMilTSxEYajbopSGMQTatLQR2XXgt6-2ncfToyQ0eI=",
            "https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=2048x2048&w=is&k=20&c=y5qtIaTcN6mnSb3bxBBhnBycfmNK48g6xawyfXHB5lw=",
            "https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=2048x2048&w=is&k=20&c=LW-lDvGfcJWfJiarRkYmKTNimvXC6xikkpUHQVoV7x0="
          ]}
          price={1000000}
          originalPrice={100000 + 50000}
          rating={5}
          discountPercentage={50}
          nights={3}
          bathroom={1}
          bedroom={2}
          capacity={3}
          parking={4}
          yardType="AHHH"
          locOnMap
        />
      )}
    </section>
  );
}