import React from 'react'
import { MyChip } from '../Buttons/Chip-btn'
import Facilities from '../HotelFacilities/Facilities'
import { ClientUser } from '../UserAvatar/ClientUser';

const FacilityData = [
    { label: 'قیمت رهن از', text: '120000000 تومان' },
    { label: 'قیمت اجاره از', text: '120000000 تومان' },
];

const RentReservation = () => {
    return (
        <div className='w-[40rem] flex flex-col gap-8'>
            <MyChip className='bg-white text-[#7575FE] border border-[#7575FE]'> قیمت رهن‌ و اجاره و اطلاعات تماس </MyChip>
            <div className="flex flex-col gap-10">
                <Facilities FacilityData={FacilityData} />
            </div>
            <div className="flex flex-row gap-8">
                <ClientUser name="عباس بهبودی" />
                <div className="flex flex-row">
                    <ClientUser name="" />
                    <MyChip className='bg-[#7575FE] text-white'>شماره تماس : 5642***0938</MyChip>
                </div>
            </div>
            <div className="flex flex-row gap-4 ">
                <MyChip className="bg-white">برچسب ها</MyChip>
                <MyChip className='text-[#7575FE] bg-white'>#خونه‌آپارتمانی</MyChip>
                <MyChip className="text-[#7575FE] bg-white">#رهن‌واجاره</MyChip>
            </div>
        </div>
    )
}

export default RentReservation