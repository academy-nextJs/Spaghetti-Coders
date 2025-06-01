import { Logout03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function LogoutOption() {
  return (
    <>
      <p
        className="flex gap-2 cursor-pointer"
        onClick={() => {
          signOut({ redirectTo: '/' });
        }}
      >
        <HugeiconsIcon icon={Logout03Icon} />
        خروج
      </p>
    </>
  );
}
