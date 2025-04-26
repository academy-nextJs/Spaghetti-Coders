import LandingCard1 from "../components/common/landing-card-1";
import LandingCard2 from "../components/common/landing-card-2";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4">
        <LandingCard1 />
      </div>

      <div className="grid grid-cols-4">
        <LandingCard2 title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2} discountPercentage={15}/>
      </div>
    </>
  );
}
