'use client'

import { Location } from "@/src/types/types";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { customIcon } from "@/src/components/ReservePage/MapComponent";

export function MapSingleMarker({ location }: { location: Location }) {
  const Position = [location.lat, location.lng]
  return (
    <MapContainer 
      className="h-96! dark:invert dark:hue-rotate-180" 
      center={Position as LatLngExpression} 
      zoom={15}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
      />
      <Marker
        position={Position as LatLngExpression}
        icon={customIcon}
      />
    </MapContainer>
  );
}