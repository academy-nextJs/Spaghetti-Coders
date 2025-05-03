"use client";
import { useState } from 'react';
import SearchModal from './SearchModal'; 
import { HugeiconsIcon } from '@hugeicons/react';
import { Cursor02Icon } from '@hugeicons/core-free-icons';

const SearchButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <SearchModal isOpen={isModalOpen} onClose={closeModal} />

            <button
                onClick={openModal}
                className="flex flex-col w-[90px] h-[90px] items-center justify-center cursor-pointer border-2 border-amber-50 bg-[#7575FE] text-white rounded-full p-4 shadow-lg">
                <div>
                    <HugeiconsIcon icon={Cursor02Icon} size={32}/>
                </div>
                <span className="text-xs mt-1 ">جستجوی سریع</span>
            </button>

        </>

    );
};

export default SearchButton;



























