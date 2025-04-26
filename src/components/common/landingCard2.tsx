'use client';
import { Card, CardHeader, Image, Button, CardFooter } from '@heroui/react';
import { PiArrowUpLeft } from 'react-icons/pi';
import Link from 'next/link';
import { LandingCard2Props } from '@/src/types/types';

export default function LandingCard2({
  text = '',
  count,
  src,
  href,
}: LandingCard2Props) {
  return (
    <Card isBlurred className="border-none w-fit relative rounded-[10%]" >
      <CardHeader className="absolute z-10 w-full flex justify-end top-2 left-2">
        <Link href={href}>
          <Button
            isIconOnly
            className="bg-white/20 backdrop-blur-lg hover:bg-white/20"
            radius="full"
            size="lg"
          >
            <PiArrowUpLeft color="white" size="1.5em" />
          </Button>
        </Link>
      </CardHeader>
      <div className="relative">
        <Image
          alt="Woman listing to music"
          className="object-cover z-0 w-full aspect-square"
          src={src ? src : 'https://heroui.com/images/card-example-6.jpeg'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <CardFooter className="flex gap-2 absolute z-10 text-white bottom-0 text-2xl font-semibold px-6 py-8">
        <p>{text}</p>
        {count && (
          <span className="font-light text-medium self-end">{count} مورد</span>
        )}
      </CardFooter>
    </Card>
  );
}
