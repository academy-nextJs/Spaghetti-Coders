import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import { ClientButton } from '@/src/components/common/Buttons/common-btn';
import { TransitionLink } from '@/src/components/common/Links/TransitionLink';

const BackHome = () => {
  return (
    <ClientButton
      className="text-sm bg-primaryGray text-black"
      endContent={<HugeiconsIcon icon={ArrowLeft01Icon} />}
    >
      <TransitionLink href="/" className='size-full flex items-center'>
        صفحه اصلی
      </TransitionLink>
    </ClientButton>
  );
};

export default BackHome;
