import { ClientInput } from '../inputs/clientInput'
import { ClientButton } from '../Buttons/common-btn'
import Price from './price'

const HotelReservation = () => {
  return (
    <div className=' flex flex-col gap-4 w-[70rem]'>
      <h1 className='font-bold text-xl  text-[#7575FE] '> همین حالا رزرو کنید </h1>
      <div className='flex flex-row w-1/2 gap-4 mt-4 '>
        <div className='flex flex-col font-bold gap-4 w-1/2'>
          <span>تاریخ ورود</span>
          <ClientInput placeholder="انتخاب کنید" />
        </div>
        <div className='flex flex-col font-bold gap-4 w-1/2'>
          <span>تاریخ خروج  </span>
          <ClientInput placeholder="انتخاب کنید" />
        </div>
      </div>
      <div className='flex flex-row w-1/2 gap-4 '>
        <div className='flex flex-col font-bold gap-4 w-1/2'>
          <span> تعداد نفرات </span>
          <ClientInput type='number' placeholder="وارد کنید "></ClientInput>
        </div>
        <div className='flex flex-col font-bold gap-4 w-1/2'>
          <span className='text-[#7575FE] '>مجموع قیمت </span>
          <Price />
        </div>
      </div>
      <ClientButton className='bg-[#7575FE] dark:bg-darkMode w-1/2 mt-4 text-white ' > همین الان رزرو کن </ClientButton >
    </div>
  )
}

export default HotelReservation