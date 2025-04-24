"use client"

import { Avatar, AvatarGroup } from '@heroui/react'
import React from 'react'

const StatCard = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#F9F9F9] h-[250px] w-[160px] shadow-lg p-6 rounded-3xl text-center">
                    <h2 className="text-sm font-bold text-black text-right m-0">بیش از</h2>
                    <p className="text-3xl font-semibold text-black text-right">+۹۰۰۰</p>
                    <p className="text-xs text-black mt-2 text-right">ملک برای رزرو رهن و اجاره</p>
                </div>

                <div className="bg-[#DFDFFF] h-[210px] mt-10 shadow-lg p-6 rounded-3xl text-center">
                    <h2 className="text-sm font-bold text-black text-right m-0">بیش از</h2> 
                    <p className="text-3xl font-semibold text-black text-right">+۸۵۰۰</p>
                    <p className="text-xs text-black mt-2 text-right">منطقه برای رزرو، ویلا</p>
                </div>

                <div className="bg-[#F9F9F9] h-[185px] w-[178px] mt-16 shadow-lg p-6 rounded-3xl text-center">
                    <h2 className="text-sm font-bold text-black text-right m-0">بیش از</h2> 
                    <p className="text-3xl font-semibold text-black text-right">+۵۰۰۰</p>

                    <div className="flex flex-col items-end rtl mt-2">
                        <AvatarGroup isBordered>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </AvatarGroup>
                        <p className="text-xs text-black mt-2 text-right">
                            رضایت مشتریانی که به آلفا اعتماد کرده اند
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatCard
