import LandingHouseCard from '../../common/LandingHouseCard';
import Carousel from '../../common/carousel';

export default function LandingCarousel() {
  return (
    <Carousel className='w-full' slidesPerView={4} spaceBetween={60} landingCardsCarousel>
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
      <LandingHouseCard title="آپارتمان لوکس زعفرانیه" location="تهران، زعفرانیه" bathroom={2} bedroom={2} parking={2} yard price={150000} originalPrice={200000} rating={2.5} discountPercentage={15} />
    </Carousel>
  );
}
