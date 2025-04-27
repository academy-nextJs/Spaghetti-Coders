import { SvgBlue } from "@/src/assets/svgs";
import FormStep1 from "./Step1";
import SwiperSlider from "../../common/auth/SwiperSlider";

const RegisterPage = () => {
    return (
        <section className="flex h-screen">
            <SvgBlue />
            <section className="w-full md:w-1/2 flex items-center justify-center">
                <FormStep1 />
            </section>
            <aside className="hidden md:block md:w-1/2 relative">
                <SwiperSlider />
            </aside>
        </section>
    );
};

export default RegisterPage