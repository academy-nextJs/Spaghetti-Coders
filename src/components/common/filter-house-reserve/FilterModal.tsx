'use client';
import { useState } from "react";
import { ClientButton } from "../Buttons/common-btn";
import { Select, SelectItem } from "@heroui/react";
import { SvgDelete } from "@/src/assets/sgvs";

export default function FilterPanel() {
    const [minPrice, setMinPrice] = useState(1500000);
    const [maxPrice, setMaxPrice] = useState(5500000);

    // const handleReset = () => {
    //     setDestination('');
    //     setSortBy('');
    //     setMinPrice(1500000);
    //     setMaxPrice(5500000);
    //     setHotelFacilities('');
    //     setHotelRating('');
    // };

    return (
        <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">فیلتر ها</h2>
                <ClientButton 
                    svg={<SvgDelete />}
                    className="text-red-500 text-sm flex bg-white items-center">
                    حذف همه 
                </ClientButton>
            </div>

            <div className="mb-4 flex flex-row gap-4">
                <Select label=" انتخاب کنید " className='w-1/2' radius='full' size='sm' >
                    <SelectItem>بابل</SelectItem>
                    <SelectItem>ساری</SelectItem>
                </Select>
                <Select label=" انتخاب کنید " className='w-1/2' radius='full' size='sm' >
                   <SelectItem>بابل</SelectItem>
                   <SelectItem>ساری</SelectItem>
                 </Select>
            </div>

            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">قیمت</label>
                <div className="flex justify-between text-xs mb-2">
                    <span>{minPrice.toLocaleString()} تومان</span>
                    <span>{maxPrice.toLocaleString()} تومان</span>
                </div>
                <input
                    type="range"
                    min="1000000"
                    max="10000000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full mb-2"
                />
                <input
                    type="range"
                    min="1000000"
                    max="10000000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                />
            </div>
            <div className="mb-4 flex flex-row gap-4">
                <Select label=" انتخاب کنید " className='w-1/2' radius='full' size='sm' >
                    <SelectItem>بابل</SelectItem>
                    <SelectItem>ساری</SelectItem>
                </Select>
                <Select label=" انتخاب کنید " className='w-1/2' radius='full' size='sm' >
                    <SelectItem>بابل</SelectItem>
                    <SelectItem>ساری</SelectItem>
                </Select>
            </div>
                
            <div className="flex gap-4">
                 <ClientButton  className="flex-1 w-[79px] ">
                    بستن
                </ClientButton>
                <ClientButton  className="flex-1 bg-[#7575FE] text-white p-2 ">
                    مشاهده نتیجه
                </ClientButton> 
            </div>
        </div>
    );
}
