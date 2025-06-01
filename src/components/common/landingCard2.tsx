'use client';
import { Card, CardHeader, Image, Button, CardFooter } from '@heroui/react';
import { LandingCard2Props } from '@/src/types/types';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpLeft01Icon } from '@hugeicons/core-free-icons';
import { TransitionLink } from './Links/TransitionLink';

export default function LandingCard2({
  text = '',
  count,
  src,
  href,
}: LandingCard2Props) {
  return (
    <Card isBlurred className="border-none w-fit relative rounded-[10%]" >
      <CardHeader className="absolute z-10 w-full flex justify-end top-2 left-2">
        <Button
          isIconOnly
          className="bg-white/20 backdrop-blur-lg hover:bg-white/20"
          radius="full"
          size="lg"
        >
          <TransitionLink href={href} className='size-full flex justify-center items-center'>
            <HugeiconsIcon icon={ArrowUpLeft01Icon} color='white'/>
          </TransitionLink>
        </Button>
      </CardHeader>
      <div className="relative">
        <Image
          alt="luxary apartment"
          loading='lazy'
          className="object-cover z-0 w-full aspect-square"
          src={src ? src : 'https://res.cloudinary.com/sentral/image/upload/w_1000,h_1000,q_auto:eco,c_fill/f_auto/v1684782440/miro_hero_building_exterior_2000x1125.jpg'}
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
