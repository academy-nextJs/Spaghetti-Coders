import HouseMortgageGrid from "../components/HouseRentPage/HouseRentGrid";
import HouseReserveCardsGrid from "../components/HouseReservePage/HouseReserveCardsGrid";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <HouseReserveCardsGrid />
        <HouseMortgageGrid />
      </div>
    </>
  );
}
