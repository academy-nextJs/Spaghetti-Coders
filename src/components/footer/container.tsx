import Image from 'next/image';
import React from 'react';
import Logo from '@/public/AlFA.svg';
import FootPic1 from '@/public/footerPic1.png';
import FootPic2 from '@/public/footerPic2.png';
import FootPic3 from '@/public/footerPic3.png';

export default function FooterContainer() {
  return (
    <footer className="rounded-3xl bg-[#F9F9F9] w-full px-7 py-8 flex flex-col gap-12">
      <Image src={Logo.src} alt="Logo" width={96} height={96} />

      <main className="flex justify-between">
        <p className="md:max-w-[25%]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
        </p>
        <div className="flex flex-col gap-3 text-[#AAAAAA]">
          <p className="text-2xl text-black">نحوه رزرو اقامتگاه</p>
          <span>راهنمای رزرو اقامتگاه</span>
          <span>شیوه پرداخت</span>
          <span>لغو رزرو اقامتگاه</span>
        </div>
        <div className="flex flex-col gap-3 text-[#AAAAAA]">
          <p className="text-2xl text-black">خدمات مشتریان</p>
          <span>پرسش های متداول مهمان</span>
          <span>پرسش های متداول میزبان</span>
          <span>چطور اقامتگاه ثبت کنم ؟</span>
          <span>حریم شخصی کاربران</span>
        </div>
        <div className="flex flex-col gap-3 text-[#AAAAAA]">
          <p className="text-2xl text-black">راه ارتباطی دلتا</p>
          <span>09229167194 - 098541612310</span>
          <span>Delta@gmail.com</span>
          <span>گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</span>
        </div>
      </main>
      <div className="flex gap-3">
        <div className='p-2 rounded-2xl bg-white'>
          <Image src={FootPic1.src} alt="1" width={48} height={48} />
        </div>
        <div className='p-2 rounded-2xl bg-white'>
          <Image src={FootPic2.src} alt="1" width={48} height={48} />
        </div>
        <div className='p-2 rounded-2xl bg-white'>
          <Image src={FootPic3.src} alt="1" width={48} height={48} />
        </div>
      </div>
    </footer>
  );
}
