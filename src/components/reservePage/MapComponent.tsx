'use client';

import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export const customIcon = new L.DivIcon({
  html: `
  <div class="relative">
    <div class="w-10 h-10 rounded-full bg-indigo-500 border-2 border-indigo-500 flex items-center justify-center text-white after:absolute after:w-0 after:h-4 after:-bottom-[24px] after:border-[15px] after:border-transparent after:border-t-[16px] after:border-t-indigo-500">
      🏢
    </div>
  </div>
  `,
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const MapComponent = () => {
  const position: LatLngExpression = [36.5519, 52.6789];
  const markers = [
    { geocode: [36.5519, 52.6789], popUp: 'Hello, I am pop up 1' },
    { geocode: [36.5519, 52.6795], popUp: 'Hello, I am pop up 2' },
    { geocode: [36.5517, 52.6781], popUp: 'Hello, I am pop up 3' },
  ];

  return (
      <MapContainer center={position} zoom={15}>
        <TileLayer
          attribution="Google Maps"
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode as LatLngExpression}
            icon={customIcon}
          >
            <Popup>
            <div className="flex text-white ">
                {/* <Image
                /> */}
                Custom popup content
            </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
  );
};

export default MapComponent;
