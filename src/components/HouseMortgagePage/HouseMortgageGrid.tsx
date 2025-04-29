import MortgageHouseCard from "../common/MortgageHouseCard/MortgageHouseCard";

export default function HouseMortgageGrid() {
  return (
    <div className="pt-10 grid grid-cols-2 gap-14">
      {Array(10).fill(null).map((_, index) => (
        <MortgageHouseCard
          key={index}
          title="HouseHouse" 
          address="Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran Tehran" 
          photos="https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=2048x2048&w=is&k=20&c=akMilTSxEYajbopSGMQTatLQR2XXgt6-2ncfToyQ0eI="
          price={1000000}
          capacity={69}
          bedroom={1}
          bathroom={1}
        />
      ))}
    </div>
  );
}