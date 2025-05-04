
import { Avatar, AvatarGroup } from '@heroui/react';

const StatCard = () => {
    return(
        <div className=" w-full h-full flex flex-row mr-4 gap-5">
            <div className="w-[199px] h-[209px] bg-[#F9F9F9] dark:bg-darkMode mt-48 mr-8 rounded-3xl">
                <h2 className="text-black dark:text-white pr-4 pt-3">بیش از</h2>
                <p className="pr-4 text-4xl pt-3">۵۰۰۰ +</p>
                 <div className="flex flex-col items-center rtl  sm:mt-2">
                       <AvatarGroup isBordered size="sm" className="scale-75 sm:scale-90 md:scale-100">
                           <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                             <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                             <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                         </AvatarGroup>
                         <p className="text-[12px] xs:text-xs dark:text-white text-black mt-3 sm:mt-2 text-right">
                             رضایت مشتریانی که به آلفا 
                              <br />
                              اعتماد کرده اند
                        </p>
                         </div>
                            </div>
            <div className="w-[200px] h-[300px] bg-[#DFDFFF] rounded-3xl dark:bg-darkMode mt-26 ">
                   <h2 className="text-xs sm:text-sm font-bold text-black text-right dark:text-white pt-3 pr-4">بیش از</h2>
                     <p className="text-4xl sm:text-2xl md:text-4xl font-semibold pt-1 pr-4 sm:pt-2 mt-2 dark:text-white text-black text-right">۸۵۰۰ +</p>
                  <p className="text-[14px] xs:text-xs text-black mt-1 pr-4 sm:mt-2 text-right dark:text-white">منطقه برای رزرو، ویلا و کلبه</p>
                  <hr className="border-0 border-l border-dashed border-[#BABAFF] dark:border-white h-1/2 w-0 mt-6 mx-auto" />

            </div>
            <div className="w-[220px] h-[400ox] bg-[#F9F9F9] rounded-3xl dark:bg-darkMode">
                          <h2 className="text-xs sm:text-sm font-bold text-black text-right dark:text-white pt-3 pr-4">بیش از</h2>
                    <p className="text-5xl sm:text-2xl md:text-5xl font-semibold pt-1 pr-4 sm:pt-3 mt-2 dark:text-white text-black text-right">۹۰۰۰ +</p>
                    <p className="text-[14px] xs:text-xs text-black mt-1 sm:mt-2 text-center dark:text-white">ملک برای رزرو رهن و اجاره</p>
                  <hr className="border-0 border-l border-dashed border-[#D1D1D1] dark:border-white h-1/2 w-0 mt-16  mx-auto" />

            </div>
        </div>
    )
}

export default StatCard