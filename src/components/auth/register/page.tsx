import { SvgBlue } from "@/src/assets/svgs";
import ImageSlider from "../ImageSlider";
import FormStep1 from "./Step1";

const RegisterPage = () => {
    return (
        <section className="flex h-screen">
            <SvgBlue />
         {/* <MultiStepRegister />  */}
            <section className="w-full md:w-1/2 flex items-center justify-center">
                <FormStep1 />
            </section>

            <aside className="hidden md:block md:w-1/2 relative">
                <ImageSlider />
            </aside>
        </section>
    );
};

export default RegisterPage