import { Notification02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function NotificationButton() {
  return (
    <button className="p-2.5 rounded-full cursor-pointer border-1.5">
      <HugeiconsIcon icon={Notification02Icon} />
    </button>
  );
}
