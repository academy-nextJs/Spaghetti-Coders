
import StatCard from "./Card"

const TextHero = () => {
    return (
        <div className="w-1/2 h-[565px] text-black dark:text-white">
            <h4 className="text-4xl pr-8 pt-6">خانه ای که میخوای،
                <br />
                جایی که میخوای
            </h4>
            <p className="text-[#767676] pr-8 pt-4"> رزرو،رهن،اجاره و حتی خرید و فروش ملک مورد نظرتون
                <br />
                مثل آب خوردن فقط در دلتا
            </p>
            <div>
                <StatCard />
            </div>
        </div>
    )
}


export default TextHero;