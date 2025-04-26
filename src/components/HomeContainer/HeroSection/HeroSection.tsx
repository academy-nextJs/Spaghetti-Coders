import Image from 'next/image';
import FilterButton from './FilterButton';
import StatCard from './Card';

const HeroSection = () => {
    return (
        <div className="container h-1/3 flex justify-center mx-auto relative w-full max-w-[1200px] bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-[530px] flex justify-center items-center relative">
                    <div className="w-full h-[430px] rounded-2xl relative">
                        <Image
                            src="/hero.png"
                            alt="Modern apartment building"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl"
                        />

                        <div className="absolute top-1/2  left-2.5 transform -translate-x-1/2 -translate-y-1/2">
                            <FilterButton />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-6 py-12 md:py-20 md:pl-12 lg:pl-20 z-10">
                    <div className="max-w-2xl mt-4">
                        <h4 className="text-right text-xl font-bold text-gray-800 mb-2">
                            خانه ای که میخوای،
                        </h4>
                        <h2 className="text-right text-xl font-bold text-gray-800 mb-6">
                            جایی که می‌خوای
                        </h2>
                        <p className="text-right text-[#767676] text-sm mb-8">
                            رهن، اجاره، خرید و فروش ملک، مورد نظرتون
                            <br />
                            مثل آب خوردن فقط در دلتا
                        </p>

                        <StatCard />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HeroSection;
