'use client';
import { Card, CardBody, CardHeader, CircularProgress } from '@heroui/react';
import { Tag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

export default function PercentCard() {
  return (
    <Card>
      <CardHeader>
        <HugeiconsIcon icon={Tag01Icon} />
        <p className="font-medium">وضعیت پروفایل شما</p>
      </CardHeader>
      <CardBody>
        <div className="flex justify-evenly">
          <div dir='rtl'>

          <p className="text-2xl font-bold text-right">40%</p>
          <p>
            برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪ تکمیل شده باشد.
          </p>
          </div>
          <CircularProgress
            classNames={{
              svg: 'w-24 h-24 drop-shadow-md',
              indicator: 'stroke-primaryPurple',
              track: 'stroke-primaryPurple/10',
              value: 'text-xl font-semibold text-white',
            }}
            strokeWidth={2}
            value={40}
          />
        </div>
      </CardBody>
    </Card>
  );
}
