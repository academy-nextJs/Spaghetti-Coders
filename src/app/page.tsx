import LandingShinyAlphaSection from "../components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection";
import HouseRentCardsGrid from "../components/HouseRentPage/HouseRentCardsGrid";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <LandingShinyAlphaSection />
        <HouseRentCardsGrid />
        {/* <LandingDiscountedSection /> */}
        {/* <LandingBuySellSection /> */}
      </div>
    </>
  );
}
