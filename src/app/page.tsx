import LandingCard1 from "../components/common/landing-card-1";
import LandingCard2 from "../components/common/landing-card-2";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4">
        <LandingCard1 />
        <LandingCard1 />
        <LandingCard1 />
        <LandingCard1 />
      </div>

      <div className="grid grid-cols-4">
        <LandingCard2 />
        <LandingCard2 />
        <LandingCard2 />
        <LandingCard2 />
      </div>
    </>
  );
}
