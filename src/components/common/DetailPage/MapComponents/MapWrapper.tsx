'use client'

import { Location } from '@/src/types/types';
import dynamic from 'next/dynamic';

const MapSingleMarker = dynamic(() => import('./MapSingleMarker').then(mod => mod.MapSingleMarker), { ssr: false }) //the usage of .then is neccessary when dynamically importing a named function/component

export function MapWrapper({ location }: { location: Location }) {
  return (
    <MapSingleMarker location={location} />
  );
}