"use client";

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./MapComponent.tsx'), {
    ssr: false,
});

const LeafletMap = () => {
    return <DynamicMap />;
};

export default LeafletMap;