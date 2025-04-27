import React from 'react'
import { ScaleLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='w-full h-full flex justify-center'>
      <ScaleLoader/>
    </div>
  )
}
