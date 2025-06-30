'use client';
import apiClient from '@/src/services/interceptors/client';
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { Tag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React, { useEffect, useState } from 'react';

interface Booking {
  id: string;
  houseName: string;
  date: string;
  price: number;
  status: string;
}

export default function RecentReservs() {
  const [data, setData] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiClient.get(
          '/bookings?page=1&limit=10&sort=created_at&order=DESC'
        );
        setData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Card>
      <CardHeader>
        <HugeiconsIcon icon={Tag01Icon} />
        <p className="font-medium"> آخرین رزرو ها</p>
      </CardHeader>
      <CardBody>
        <Table aria-label="reserve table">
          <TableHeader>
            <TableColumn>نام اقامتگاه</TableColumn>
            <TableColumn>تاریخ رزرو</TableColumn>
            <TableColumn>قیمت</TableColumn>
            <TableColumn>وضعیت</TableColumn>
          </TableHeader>
          <TableBody emptyContent={'اطلاعاتی موجود نیست'}>
            {data?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.houseName}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}
