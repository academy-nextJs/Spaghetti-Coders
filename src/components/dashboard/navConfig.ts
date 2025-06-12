import { Cash01Icon, FavouriteCircleIcon, Home01Icon, TimeManagementCircleIcon, User02Icon } from "@hugeicons/core-free-icons";

export const navObj =[
    {
        href:'/dashboard',
        label: 'داشبورد',
        icon: Home01Icon
    },
    {
        href:'/dashboard/userInfo',
        label: 'اطلاعات کاربری',
        icon: User02Icon
    },
    {
        href:'/dashboard/reserveMng',
        label: 'مدیریت رزروها',
        icon: TimeManagementCircleIcon
    },
    {
        href:'/dashboard/fav',
        label: 'علاقه‌مندی‌ها',
        icon: FavouriteCircleIcon
    },
    {
        href:'/dashboard/payments',
        label: 'پرداخت‌ها',
        icon: Cash01Icon
    },
]