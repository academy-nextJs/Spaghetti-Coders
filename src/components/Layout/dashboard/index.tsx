import React from 'react';
import SideMenu from './SideMenu';
import DashboardHeader from './Header';
import MainContent from './MainContent';

export default function DashboardContainer() {
  return (
    <div className="flex gap-4">
      <SideMenu>منو</SideMenu>
      <div className="flex flex-col gap-4 w-4/5 h-full">
        <DashboardHeader>header</DashboardHeader>
        <MainContent> constent</MainContent>
      </div>
    </div>
  );
}
