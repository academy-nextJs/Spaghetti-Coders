import React from 'react'

const Price = () => {
    return (
        <div>
            <div className='flex flex-wrap items-end gap-1 text-right font-medium'>
                <div className='relative flex items-end text-[#A6A6A6]'>
                    <span className="font-bold text-xl leading-6">۲,۰۰۰,۰۰۰</span>
                    <span className="text-[0.8rem]/[0.8rem] text-[#A6A6A6] font-semibold">تومان</span>
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 rotate-[-10deg]"></div>
                </div>
                <span className='font-black'>/</span>
                <div className="flex items-end">
                    <span className="font-bold text-xl leading-6 text-black dark:text-white ">۱,۸۰۰,۰۰۰</span>
                    <span className="text-[0.8rem]/[0.8rem] text-[#595959] dark:text-[#A6A6A6] font-semibold">تومان</span>
                </div>
            </div>
        </div>
    )
}

export default Price