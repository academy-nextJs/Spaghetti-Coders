'use client'
import { Card, CardBody, CardHeader } from '@heroui/react';
import { Tag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
]

export default function ReserveChart() {
  return (
    <Card>
      <CardHeader>
        <HugeiconsIcon icon={Tag01Icon} />
        <p className="font-medium"> نمودار رزرو ها</p>
      </CardHeader>
      <CardBody>
            <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
