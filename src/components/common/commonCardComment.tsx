'use client';
import { CommonCardCommentProps } from '@/src/types/types';
import { Avatar, Card, CardFooter } from '@heroui/react';
import React from 'react';

export default function CommonCardComment({
  text = '',
  name = 'Unknown',
  date = '12 مرداد 1403',
  imageUrl = 'https://heroui.com/avatars/avatar-1.png',
}: CommonCardCommentProps) {
  return (
    <Card className="max-w-[400px] rounded-3xl p-2 bg-[#F9F9F9] min-h-[300px]" shadow='none'>
      <p className='p-2 px-3'>{text}</p>
      <CardFooter className="gap-4">
        <Avatar radius="full" size="md" src={imageUrl} />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="font-light">{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
