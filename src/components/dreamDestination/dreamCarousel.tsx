import React, { useEffect, useState } from 'react';
import Carousel from '../common/carousel';
import LandingCard2 from '../common/landingCard2';
import axios from 'axios';
import Loading from '../common/loading';
interface Locations {
  id:string,
  area_name:string,
  lat:string,
  long:string

}
export default function DreamCarousel() {
  const [locations, setLocations] = useState<Locations[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get('https://delta-project.liara.run/api/locations');
        setLocations(data); 
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
  return (
    <>
      <Carousel slidesPerView={3.5}>
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
