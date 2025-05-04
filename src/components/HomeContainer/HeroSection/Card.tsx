import { Avatar, AvatarGroup } from '@heroui/react';

const StatCard = () => {
  return (
    <div className="w-full flex flex-col px-4 sm:px-6 md:flex-row gap-1 sm:gap-4 md:gap-5 mb-12 sm:mb-20 md:mb-32">
      <div className="w-full md:w-[12.44rem] h-auto md:h-[13.06rem] bg-[#F9F9F9] dark:bg-darkMode rounded-2xl sm:rounded-3xl p-4 md:mt-48 mt-4 sm:mt-6">
        <h2 className="text-black dark:text-white pl-2 md:pl-4 pt-1 md:pt-3 text-sm text-right">بیش از</h2>
        <p className="pl-2 md:pl-4 text-2xl sm:text-3xl md:text-4xl pt-1 md:pt-3 font-semibold text-right">۵۰۰۰ +</p>
        <div className="flex flex-col items-center rtl mt-1 sm:mt-2">
          <AvatarGroup size="sm"  className="scale-y-75 sm:scale-y-90 md:scale-y-100">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          </AvatarGroup>
          <p className="text-[10px] xs:text-[12px] md:text-[12px] dark:text-white text-black mt-2 text-center md:text-right">
            رضایت مشتریانی که به آلفا
            <br />
            اعتماد کرده اند
          </p>
        </div>
      </div>
      <div className="w-full md:w-[12.5rem] h-auto md:h-[18.75rem]  bg-[#DFDFFF] rounded-2xl sm:rounded-3xl dark:bg-darkMode p-4 mt-3 sm:mt-4 md:mt-26">
        <h2 className="text-xs sm:text-sm font-bold text-black text-right dark:text-white pt-1 md:pt-3 pl-2 md:pl-4">بیش از</h2>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold pt-1 pl-2 md:pl-4 mt-1 md:mt-2 dark:text-white text-black text-right">۸۵۰۰ +</p>
        <p className="text-[12px] xs:text-[14px] text-black mt-1 pl-2 md:pl-4 sm:mt-2 text-center dark:text-white">منطقه برای رزرو، ویلا و کلبه</p>
        <div className="flex justify-center h-16 sm:h-20 md:h-40 mt-4 md:mt-6">
                  <hr className="hidden md:block  border-1 border-dashed border-[#BABAFF] dark:border-white h-full  sm:h-[8rem] w-0" />
        </div>
      </div>
      <div className="w-full md:w-[13.75rem] h-auto md:h-[23.9rem] bg-[#F9F9F9] rounded-2xl sm:rounded-3xl dark:bg-darkMode p-4 mt-3 sm:mt-4">
        <h2 className="text-xs sm:text-sm font-bold text-black text-right dark:text-white pt-1 md:pt-3 pl-2 md:pl-4">بیش از</h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold pt-1 pl-2 md:pl-4 mt-1 md:mt-2 dark:text-white text-black text-right">۹۰۰۰ +</p>
        <p className="text-[12px] xs:text-[14px] text-black mt-1 sm:mt-2 text-center dark:text-white">ملک برای رزرو رهن و اجاره</p>
        <div className="flex justify-center h-16 sm:h-24 md:h-64 mt-6 md:mt-6">
                  <hr className="hidden md:block  border-l border-dashed border-[#D1D1D1] dark:border-white sm:h-[13rem] h-full w-0" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;