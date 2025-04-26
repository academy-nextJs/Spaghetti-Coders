'use client';

import Image from "next/image";
import {
  Card, 
  // CardHeader, 
  // CardBody
} from "@heroui/react";
import Pic from '@/public/PoolHouse.png'
// import CatArrow from '@/src/assets/CategoryArrow.svg'

export default function LandingCard1() {
  return (
    <Card 
      className="relative py-4 size-[345px] rounded-3xl bg-[linear-gradient(360deg,rgba(0,0,0,0.57)_0%,rgba(158,158,158,0)_100%)]"
      // style={{background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.57) 0%, rgba(158, 158, 158, 0) 100%)'}} //Doesnt accept!!!!!!!!
    >
      <Image
        alt="Card background"
        className="object-cover absolute inset-0 w-full h-full"
        src={Pic.src}
        width={270}
        height={270}
      />

      <div className="absolute top-[4%] left-[4%] size-12 bg-[rgba(255,255,255,0.23)] backdrop-blur-[9px] rounded-full flex justify-center items-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.25 6.25L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M13.3333 5.15659C13.3333 5.15659 6.62673 4.59124 5.60898 5.60899C4.59115 6.62674 5.15665 13.3333 5.15665 13.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <h4 className="absolute bottom-[8%] right-[6%] font-bold text-2xl text-white">استخردار</h4>



      {/* <CardHeader className="absolute top-0 left-0 ">
        <div className="text-tiny uppercase font-bold">Daily Mix</div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      </CardBody> */}
    </Card>
  );
}