import { Spinner } from '@heroui/react';
import React from 'react';

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center">
      <Spinner color="secondary" size="lg"/>
    </div>
  );
}
