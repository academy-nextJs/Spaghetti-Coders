'use client';
import { Switch } from '@heroui/react';
import React from 'react';
import BasicModal from '../../common/ui/BasicModal';

export default function NotifSettingModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <BasicModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      header="تنظیمات نوتیفیکیشن"
    >
      <Switch defaultSelected color="secondary">
        نوتیفیکیشن رزرو
      </Switch>
      <Switch defaultSelected color="secondary">
        نوتیفیکیشن پرداخت
      </Switch>
      <Switch defaultSelected color="secondary">
        نوتیفیکیشن تخفیف
      </Switch>
      <Switch defaultSelected color="secondary">
        نوتیفیکیشن سیستمی
      </Switch>
    </BasicModal>
  );
}
