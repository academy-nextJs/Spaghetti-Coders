import Image from 'next/image';
import StatCard from './StatCard';
import FilterButton from './FilterButton';

const HeroSection = () => {
    return (
        <div className="container h-1/4 mx-auto relative w-full max-w-[1200px] bg-white overflow-hidden ">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side content */}
                <div className="w-full md:w-1/2 px-6 py-12 md:py-20 md:pl-12 lg:pl-20 z-10">
                    <div className="max-w-2xl mt-12">
                        <h4 className="text-right text-xl  font-bold text-gray-800 mb-2">
                            ،خانه ای که میخوای
                        </h4>
                        <h2 className="text-right text-xl font-bold text-gray-800 mb-6">
                            جایی که می‌خوای
                        </h2>
                        <p className="text-right text-[#767676] text-sm mb-8">
                            رهن، اجاره، خرید و فروش ملک، مورد نظرتون
                            <br />
                            مثل آب خوردن فقط در دلتا
                        </p>

                        <div className="flex  gap-6">
                            <StatCard
                                count="+۹۰۰۰"
                                label="ملک برای رهن و اجاره"
                                color="white"
                            />
                            <StatCard
                                count="+۸۵۰۰"
                                label="منطقه برای خرید ویلا و کلبه"
                                color="purple"
                            />
                            <StatCard
                                count="+۷۰۰۰ "
                                label="رضایت مشتریانی که به ما اعتماد کرده اند"
                                color="white"
                                withAvatars={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Right side image */}
                <div className="w-full md:w-1/3 flex  h-96 rounded-2xl relative">
                    <Image
                        src="/hero.png" // Replace with your actual image path
                        alt="Modern apartment building"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-3xl"
                    />

                    {/* Filter button */}
                    <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <FilterButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;