import HeroSection from "../components/HomeContainer/HeroSection";
import dynamic from 'next/dynamic';

const LandingComments = dynamic(() => import('../components/Landing/comments/commentsContainer'));
const DreamSection = dynamic(() => import('../components/Landing/dreamDestination/dreamSectionContainer'));
const LandingBuySellSection = dynamic(() => import('../components/Landing/LandingBuySellSection/LandingBuySellSection'));
const LandingCarousel = dynamic(() => import('../components/Landing/LandingCarousel/LandingCarousel'));
const CategoryCarousel = dynamic(() => import('../components/Landing/landingCategory/categoryCarousel'));
const LandingDiscountedSection = dynamic(() => import('../components/Landing/LandingDiscountedSection/LandingDiscountedSection'));
const LandingShinyAlphaSection = dynamic(() => import('../components/Landing/LandingShinyAlphaSection/LandingShinyAlphaSection'));

import api from "../services/api";


export default async function HomePage() {
  const { data } = await api.get('/categories');

  return (
    <div className="w-full flex flex-col gap-20 justify-ceneter">
      <HeroSection />
      <div className="flex justify-end">
        <CategoryCarousel data={data} />
      </div>
      <div className="">
        <LandingDiscountedSection />
        <LandingCarousel data={data} discountedSection={true} />
      </div>
      <div className="">
        <DreamSection />
      </div>
      <div className=" ">
        <LandingShinyAlphaSection />
      </div>
      <div className="">
        <LandingBuySellSection />
      </div>
      <div className="">
        <LandingComments />
      </div>
    </div>
  );
}
