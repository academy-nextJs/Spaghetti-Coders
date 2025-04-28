import HouseRentCardsGrid from "../components/HouseRentPage/HouseRentCardsGrid";
import LandingBuySellSection from "../components/Landing/LandingBuySellSection/LandingBuySellSection";
import LandingDiscountedSection from "../components/Landing/LandingDiscountedSection/LandingDiscountedSection";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <HouseRentCardsGrid />
        <LandingDiscountedSection />
        <LandingBuySellSection />
      </div>
    </>
  );
}
