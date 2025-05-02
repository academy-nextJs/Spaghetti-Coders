import Image from "next/image";
import LoginForm from "./LoginForm";
import SwiperSlider from "../../common/auth/SwiperSlider";
import Logo from '@/public/AlFA.svg';

const LoginPage = () => {
    return (
        <section className="h-full flex">
            <section className="w-full md:w-1/2 flex items-center justify-center">
                <LoginForm />
            </section>
            <Image
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10 dark:invert-100"
                src={Logo.src}
                alt="Logo"
                width={78}
                height={78}
            />

            <aside className="hidden md:block md:w-1/2">
                <SwiperSlider />
            </aside>
            {/* <SvgBlue /> */}

        </section>
    );
};

export default LoginPage;