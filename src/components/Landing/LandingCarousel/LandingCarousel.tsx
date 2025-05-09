import { LandingCarouselProps } from '@/src/types/types';
import LandingHouseCard from '../../common/LandingHouseCard/LandingHouseCard';
import Carousel from '../../common/carousel';

export default function LandingCarousel({
  data,
  discountedSection,
}: LandingCarouselProps) {
  return (
    <Carousel
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 10 },
        710: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1440: { slidesPerView: 4, spaceBetween: 60 },
      }}
      centerInsufficientSlides
      centeredSlidesBounds
      landingCardsCarousel
    >
      {discountedSection
        ? (data || []).map((item) => (
            <LandingHouseCard
              key={item.id}
              title={item.title}
              address={item.address}
              bathroom={item.bathrooms}
              bedroom={item.rooms}
              capacity={item.capacity}
              price={!isNaN(Number(item.price)) ? Number(item.price) : 0} //this line have error
              originalPrice={Number(item.price) + 500000}
              rating={Number(item.rate)}
              discountPercentage={Math.round(
                ((Number(item.price) + 500000 - Number(item.price)) /
                  (Number(item.price) + 500000)) *
                  100
              )} //this line have error
              photos={item.photos}
            />
          ))
        : (data || []).map((item) => (
            <LandingHouseCard
              key={item.id}
              title={item.title}
              address={item.address}
              bathroom={item.bathrooms}
              bedroom={item.rooms}
              parking={item.parking}
              yardType={item.yard_type}
              price={!isNaN(Number(item.price)) ? Number(item.price) : 0}  //this line have error
              photos={item.photos}
            />
          ))}
    </Carousel>
  );
}
