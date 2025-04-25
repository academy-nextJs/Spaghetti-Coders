'use client';
import { Avatar, Card, CardBody, CardFooter } from '@heroui/react';
import React from 'react';
import { CommonCardCommentProps } from '../types/types';

export default function CommonCardComment({
  text = '',
  name = 'Unknown',
  date = '',
  imageUrl = 'https://heroui.com/avatars/avatar-1.png',
}: CommonCardCommentProps) {
  return (
    <Card className="max-w-[400px] rounded-3xl">
      <CardBody>{text}</CardBody>
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
