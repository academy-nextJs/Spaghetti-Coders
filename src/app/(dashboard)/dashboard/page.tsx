import PercentCard from '@/src/components/dashboard/dashboardDetails/Cards';
import DashMiniCard from '@/src/components/dashboard/dashboardDetails/DashMiniCard';
import RecentReservs from '@/src/components/dashboard/dashboardDetails/RecentReservs';
import ReserveChart from '@/src/components/dashboard/dashboardDetails/ReserveChart';
import api from '@/src/services/interceptors/server';
import React from 'react';

const dashboard = async () => {
  const {data} = await api.get('/dashboard/summary')
  console.log(data);
  // { houses: 4, users: 9, bookings: 31, averageRating: '4.14' }
  return (
    <div>
      <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2">
        <DashMiniCard count={data.houses} text='خانه ها'/>
        <DashMiniCard count={data.users} text='کاربران'/>
        <DashMiniCard count={data.booking} text='رزرو ها'/>
        <DashMiniCard count={data.averageRating} text='میانگین امتیاز'/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 my-2'>
        <PercentCard/>
        <ReserveChart/>
      </div>
      <RecentReservs/>
    </div>
  );
};

export default dashboard;
