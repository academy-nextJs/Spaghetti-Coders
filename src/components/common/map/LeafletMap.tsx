"use client";

import dynamic from 'next/dynamic';
import { FC } from 'react';

const DynamicMap = dynamic(() => import('./MapComponent.tsx'), {
    ssr: false,
});

const LeafletMap: FC = () => {
    return <DynamicMap />;
};

export default LeafletMap;