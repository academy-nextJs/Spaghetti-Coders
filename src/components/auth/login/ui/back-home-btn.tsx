import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import Link from 'next/link';
import { ClientButton } from '@/src/components/common/Buttons/common-btn';

const BackHome = () => {
  return (
    <Link href="/">
      <ClientButton
        className="text-sm bg-primaryGray text-black"
        endContent={<HugeiconsIcon icon={ArrowLeft01Icon} />}
      >
        صفحه اصلی
      </ClientButton>
    </Link>
  );
};

export default BackHome;
