"use client";

import Image from "next/image";
import { Users } from "../common/auth/user-btn";
import { MyCircularProgress } from "../common/Buttons/loading-btn";

const ImageSlider = () => {
    return (
        <section className="relative h-[695px] rounded-3xl overflow-hidden">
            <figure className="h-full relative">
                <Image
                    src="/loginPic.png"
                    alt="Modern staircase"
                    layout="fill"
                    objectFit="cover"
                />

                <figcaption className="absolute bottom-32 right-10 left-10 text-white text-right">
                    <p className="text-lg leading-relaxed">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                        فرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
                    </p>
                </figcaption>
            </figure>

            <aside className="absolute bottom-10 right-10 flex items-center">
                <Users
                    name="پارسا آقایی"
                    description="12 مرداد 1403"
                    className="text-white"
                />
            </aside>

            <nav className="absolute bottom-10 left-10 flex gap-2">
                <MyCircularProgress />
                <button className="bg-gray-500 bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center text-white">
                    &lt;
                </button>
                <button className="bg-gray-500 bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center text-white">
                    &gt;
                </button>
            </nav>
        </section>
    );
};

export default ImageSlider;


