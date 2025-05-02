'use client';

import { SvgMap, SvgMap2 } from '@/src/assets/sgvs';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const MapComponent = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

    }, []);

    const position: LatLngExpression = [36.5519, 52.6789];


    const customIcon = isMounted ? new L.DivIcon({
        html: `
    <div class="relative">
      <div class="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white shadow-lg flex items-center justify-center text-white">
        🏢
      </div>
    </div>
    `,
        className: '',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    }) : null;

    if (!isMounted) {
        return (
            <div className="w-full md:w-3/4 h-[50vh] rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500">در حال بارگذاری نقشه...</div>
            </div>
        );
    }

    return (
        <div className="w-1/2 md:w-3/4 h-[50vh] rounded-xl overflow-hidden shadow-md">
            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={true}
                className="w-1/2 h-full z-0"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position} icon={customIcon}>
                    <Popup className=" w-[300px] rounded-xl ">
                        <div className="bg-[#7575FE] w-[300px] flex justify-center text-white rounded-xl p-3 text-sm leading-relaxed shadow-lg" dir="rtl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-md mb-12 overflow-hidden flex-shrink-0">
                                        <img
                                            src="/pop.png"
                                            alt="آپارتمان"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="w-56 h-28">
                                        <h3 className="font-bold pt-1 h-2 text-right text-sm">آپارتمان لوکس بابل</h3>
                                        <p className="text-xs flex pt-1 gap-1 items-center">
                                            <SvgMap />
                                            بابل، خیابان شریعتی میدان انقلاب روبرو ...
                                        </p>
                                        <p className="text-right flex flex-row text-sm h-2">
                                            <span className="discount-line ml-2 ">۱۵۰۰۰۰۰ تومان</span> / ۱.۵۰۰۰۰۰ تومان
                                        </p>
                                        <p className="text-white h-2 flex flex-row cursor-pointer text-xs pt-1 text-right ">  جزییات بیشتر و رزرو <SvgMap2 />
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>

            <style jsx global>{`
        .leaflet-popup-content-wrapper {
          padding: 0 !important;
          overflow: hidden;
          border-radius: 0.5rem;
        }
        
        .leaflet-popup-content {
          margin: 0 !important;
          width: auto !important;
        }
        
        .leaflet-popup-close-button {
          color: white !important;
          z-index: 999;
        }
        .leaflet-popup-tip {
        background:#7575FE;
        }
        .leaflet-popup {
          margin-bottom: 0 !important;
        }
        
        .leaflet-popup-content {
          min-width: 450px !important;
        }
        .discount-line {
        position: relative;
        display: inline-block;
        color: white;
        font-size: clamp(0.8rem, 2.5vw, 1rem);
        }

        .discount-line::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        height: 1px; 
        width: 0;
        background-color: #ef4444;
        transform: rotate(-15deg);
        transform-origin: center;
         animation: drawLine 0.8s ease-out forwards;
        }

        @keyframes drawLine {
         to {
         width: 100%;
        }
    }


      `}</style>
        </div>
    );
};

export default MapComponent;