import { SvgBlue } from "@/src/assets/svgs";
import ImageSlider from "./ImageSlider";
import LoginForm from "./LoginForm";


const LoginPage = () => {
    return (
        <section className="flex h-screen">
            <section className="w-full md:w-1/2 flex items-center justify-center">
                <LoginForm />
            </section>

            <aside className="hidden md:block md:w-1/2 relative">
                <ImageSlider />
            </aside>
            <SvgBlue />

        </section>
    );
};

export default LoginPage;