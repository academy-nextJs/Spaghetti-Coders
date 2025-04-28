import FilterPanel from "../components/common/filter-house-reserve/FilterModal";
import LandingShinyAlphaSection from "../components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <LandingShinyAlphaSection />
        <FilterPanel />
      </div>
    </>
  );
}
