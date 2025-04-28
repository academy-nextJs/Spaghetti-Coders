import MortgageHouseCard from "../components/common/MortgageHouseCard/MortgageHouseCard";
// import HouseRentCardsGrid from "../components/HouseRentPage/HouseRentCardsGrid";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <MortgageHouseCard
          title="HouseHouse" 
          address="Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran" 
          photos="https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=2048x2048&w=is&k=20&c=akMilTSxEYajbopSGMQTatLQR2XXgt6-2ncfToyQ0eI="
          price={1000000}
        />
        {/* <HouseRentCardsGrid /> */}
      </div>
    </>
  );
}
