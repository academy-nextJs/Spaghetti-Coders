import React from 'react';
import { useRouter } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import { ClientButton } from '@/src/components/common/Buttons/common-btn';

const BackPage = () => {
  const router = useRouter();

  return (
    <ClientButton
      className="text-sm bg-primaryGray text-black"
      onPress={() => router.back()}
      endContent={<HugeiconsIcon icon={ArrowLeft01Icon} />}
    >
      بازگشت
    </ClientButton>
  );
};

export default BackPage;
