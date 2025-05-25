import React from 'react';

import SideMenuLayout from './SideMenu';
import MainContentLayout from './MainContent';
import DashHeader from '../../dashboard/header/DashHeader';
import DrawerMenu from './DrawerMenu';

export default function DashboardContainer() {
  return (
    <div className="flex gap-4">
      <div className="w-1/4 hidden md:block">
        <SideMenuLayout>منو</SideMenuLayout>
      </div>
      <div className="flex flex-col gap-4 md:w-4/5  w-full h-full">
        <DashHeader />
        <MainContentLayout> constent</MainContentLayout>
      <div className='md:hidden w-fit m-auto'>
        <DrawerMenu>
          hikgjladfs
        </DrawerMenu>
      </div>
      </div>
    </div>
  );
}
