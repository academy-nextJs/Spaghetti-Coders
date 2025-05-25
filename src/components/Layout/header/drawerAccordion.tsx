import Link from 'next/link';
import React from 'react';

export default function DrawerAccordion() {
  return (
    <>
      <Link href="/rent&mort">رهن و اجاره</Link>
      <Link href="/reserve">رزرو</Link>
    </>
  );
}
