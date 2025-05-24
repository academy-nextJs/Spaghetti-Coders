import Image from 'next/image';
import { MyChip } from '../../common/Buttons/Chip-btn';
import Pic from '@/src/assets/ShinyAlpha+10.png';

export default function LandingShinyAlphaSection() {
  return (
    <div className="w-full relative flex flex-col items-center lg:flex-row gap-6">
      <div className="w-fit lg:w-1/2 flex flex-col gap-5">
        <MyChip
          size="lg"
          className="bg-transparent border border-primaryPurple text-primaryPurple font-black py-6 px-3"
        >
          آلفا درخشان
        </MyChip>
        <h1 className="w-fit font-bold text-3xl">
          <span className="text-primaryPurple ml-2">+10</span>
          سال سابقه درخشان
        </h1>
        <p className="max-w-[35rem] font-normal">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <div className="absolute top-[10%] left-1/2 -z-10 w-[260px] aspect-square bg-[radial-gradient(circle,#7575FE50_0%,#7575FE50_80%,white_100%)] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] -z-10 w-[200px] aspect-square bg-[radial-gradient(circle,#7575fe96_0%,#7575fe96_50%,white_100%)] blur-[100px]" />
        <Image
          src={Pic}
          alt="Description of image"
          className="w-2/3 aspect-square"
        />
      </div>
    </div>
  );
}
