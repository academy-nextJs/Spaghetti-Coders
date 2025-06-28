'use client';
import apiClient from '@/src/services/interceptors/client';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
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
        const { data } = await apiClient.get('/bookings?page=1&limit=10&sort=created_at&order=DESC')
        setData(data.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, []);
  return (
    <Table aria-label="Example table with dynamic content">
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
  );
}
