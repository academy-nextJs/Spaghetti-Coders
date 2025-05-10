import React from 'react';
import { SectionTop } from '../../common/sectionTop';
import InfiniteCarousel from './InfiniteCarousel';

export default function LandingComments() {
  return (
    <section className='mb-12'>
      <SectionTop
        mainText={['نظرات کاربران درباره آلفا']}
        subText={[
          'تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های\n املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .',
        ]}
      />
      <div className='w-[110%] mr-[-5%]'>

      <InfiniteCarousel />
      </div>
    </section>
  );
}
