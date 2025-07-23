import React from 'react';

import SideMenuLayout from '../../../components/Layout/dashboard/SideMenu';
import MainContentLayout from '../../../components/Layout/dashboard/MainContent';
import DashHeader from '../../../components/dashboard/header/DashHeader';
import MobileQuickAccess from '../../../components/dashboard/MobileQuickAccess';

import { ReactNode } from 'react';
import { DashboardNavLink } from '../../../components/dashboard/Navlink';

export default function DashboardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-1/4 hidden md:block">
        <SideMenuLayout>
          <DashboardNavLink />
        </SideMenuLayout>
      </div>
      <div className="flex flex-col gap-4 md:w-4/5  w-full h-full">
        <DashHeader />
        <MainContentLayout> {children}</MainContentLayout>
        <div className="md:hidden w-fit m-auto">
          <MobileQuickAccess>hikgjladfs</MobileQuickAccess>
        </div>
      </div>
    </div>
  );
}
