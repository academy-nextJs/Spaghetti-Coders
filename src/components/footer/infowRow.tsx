import React from 'react'

export default function InfowRow() {
  return (
    <main className="flex flex-col lg:flex-row xl:flex-nowrap lg:flex-wrap justify-between gap-8">
    <p className="lg:w-[45%] xl:w-[23%] md:max-w-full">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
      استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
      ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
      کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
      در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
    </p>
    <div className="flex flex-col gap-3 text-[#AAAAAA] lg:w-[45%] xl:w-[23%]">
      <p className="text-2xl text-black">نحوه رزرو اقامتگاه</p>
      <span>راهنمای رزرو اقامتگاه</span>
      <span>شیوه پرداخت</span>
      <span>لغو رزرو اقامتگاه</span>
    </div>
    <div className="flex flex-col gap-3 text-[#AAAAAA] lg:w-[45%] xl:w-[23%]">
      <p className="text-2xl text-black">خدمات مشتریان</p>
      <span>پرسش های متداول مهمان</span>
      <span>پرسش های متداول میزبان</span>
      <span>چطور اقامتگاه ثبت کنم ؟</span>
      <span>حریم شخصی کاربران</span>
    </div>
    <div className="flex flex-col gap-3 text-[#AAAAAA] lg:w-[45%] xl:w-[23%]">
      <p className="text-2xl text-black">راه ارتباطی دلتا</p>
      <span>09229167194 - 098541612310</span>
      <span>Delta@gmail.com</span>
      <span>گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</span>
    </div>
  </main>
  )
}
