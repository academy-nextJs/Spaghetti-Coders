import React from 'react';
import { TransitionLink } from '../../common/Links/TransitionLink';

export default function DrawerAccordion() {
  return (
    <>
      <TransitionLink href="/rent&mort">رهن و اجاره</TransitionLink>
      <TransitionLink href="/reserve">رزرو</TransitionLink>
    </>
  );
}
