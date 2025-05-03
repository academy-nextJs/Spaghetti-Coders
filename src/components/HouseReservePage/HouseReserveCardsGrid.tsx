import LandingHouseCard from "../common/LandingHouseCard/LandingHouseCard";

export default function HouseReserveCardsGrid() {
  return (
    <section className="w-1/3 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          locOnMap
          />
      )}
    </section>
  );
}