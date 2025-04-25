
"use client"

import React from 'react';
import { Avatar, AvatarGroup } from '@heroui/react';

const StatCard = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-row w-full gap-2 sm:gap-4">
                <div className="bg-[#F9F9F9] h-[140px] sm:h-[165px] md:h-[185px] w-[30%] sm:w-[158px] mt-4 sm:mt-16 shadow-lg p-2 sm:p-3 rounded-2xl sm:rounded-3xl text-right">
                    <h2 className="text-xs sm:text-sm font-bold text-black text-right m-0">بیش از</h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold pt-1 sm:pt-2 text-black text-right">۵۰۰۰+</p>

                    <div className="flex flex-col items-center rtl mt-1 sm:mt-2">
                        <AvatarGroup isBordered size="sm" className="scale-75 sm:scale-90 md:scale-100">
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </AvatarGroup>
                        <p className="text-[10px] xs:text-xs text-black mt-1 sm:mt-2 text-right">
                            رضایت مشتریانی که به آلفا اعتماد کرده اند
                        </p>
                    </div>
                </div>

                <aside className="bg-[#DFDFFF] h-[160px] sm:h-[180px] md:h-[210px] w-[30%] sm:w-1/3 mt-2 sm:mt-10 shadow-lg p-2 sm:p-3 rounded-2xl sm:rounded-3xl text-right">
                    <h2 className="text-xs sm:text-sm font-bold text-black text-right m-0">بیش از</h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold pt-1 sm:pt-2 text-black text-right">۸۵۰۰+</p>
                    <p className="text-[10px] xs:text-xs text-black mt-1 sm:mt-2 text-right">منطقه برای رزرو، ویلا</p>
                </aside>

                <aside className="bg-[#F9F9F9] h-[180px] sm:h-[210px] md:h-[250px] w-[30%] sm:w-1/3 shadow-lg p-2 sm:p-3 rounded-2xl sm:rounded-3xl text-right">
                    <h2 className="text-xs sm:text-sm font-bold text-black text-right m-0">بیش از</h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold pt-1 sm:pt-3 text-black text-right">۹۰۰۰+</p>
                    <p className="text-[10px] xs:text-xs text-black mt-1 sm:mt-2 text-right">ملک برای رزرو رهن و اجاره</p>
                </aside>
            </div>
        </div>
    );
};

export default StatCard;