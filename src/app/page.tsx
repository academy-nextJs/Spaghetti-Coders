import FilterPanel from "../components/common/Filter-house-reserve/FilterModal";
// import LandingShinyAlphaSection from "../components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection";
import 'leaflet/dist/leaflet.css';
import LeafletMap from "../components/common/map/LeafletMap";

export default function Home() {
  return (
    <>
      <div className="pt-10">
        {/* <LandingShinyAlphaSection /> */}
        <FilterPanel />
        <LeafletMap /> 
      </div>
    </>
  );
}
