"use client";
import { useState } from 'react';
import SearchModal from './SearchModal'; 

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
                <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0704 6.17297L21.1152 9.32092C25.7552 11.1366 28.0752 12.0444 27.9982 13.4844C27.9213 14.9245 25.5001 15.5848 20.6577 16.9055C19.216 17.2987 18.495 17.4953 17.9952 17.9951C17.4953 18.4949 17.2988 19.2159 16.9054 20.6577C15.5849 25.5 14.9245 27.9212 13.4845 27.9981C12.0444 28.0751 11.1366 25.7551 9.32098 21.1151L6.17303 13.0703C4.27213 8.21245 3.32167 5.78352 4.55262 4.55256C5.78358 3.32161 8.21253 4.27207 13.0704 6.17297Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className="text-xs mt-1 ">جستجوی سریع</span>
            </button>

        </>
     
    );
};

export default SearchButton;








