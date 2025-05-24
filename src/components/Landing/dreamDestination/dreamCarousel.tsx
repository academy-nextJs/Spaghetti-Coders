'use client';
import React, { useEffect, useState } from 'react';
import Carousel from '../../common/carousel';
import LandingCard2 from '../../common/landingCard2';
import Loading from '../../common/Loading/LoadingSpinner';
import apiClient from '@/src/services/interceptors/client';
interface Locations {
  id: string;
  area_name: string;
  lat: string;
  long: string;
}
export default function DreamCarousel() {
  const [locations, setLocations] = useState<Locations[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiClient.get('/locations');
        const newLocation: Locations = {
          id: '342',
          area_name: 'سیرالئون',
          lat: '35.6892',
          long: '51.3890',
        };
        setLocations([...data, newLocation]);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err: unknown) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  const breakpoints = {
    0: {
      slidesPerView: 3.5 - 2,
    },
    768: {
      slidesPerView: 3.5 - 1,
    },
    1280: {
      slidesPerView: 3.5,
    },
  };
  return (
    <>
      <Carousel slidesPerView={3.5} breakpoints={breakpoints}>
        {locations.map((item) => (
          <LandingCard2
            key={item.id}
            href={`houses/${item.id}`}
            text={item.area_name}
          />
        ))}
      </Carousel>
    </>
  );
}
