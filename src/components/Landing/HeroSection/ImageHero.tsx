import ModalSearch from "./SearchModal";
import Image from "next/image";
const ImageHero = () => {
  return (
    <div className="md:w-full md:h-[35.35rem] h-[20rem] sm:flex-center rounded-2xl relative">
      <Image
        src="/hero.png"
        alt="Modern apartment building"
        layout="fill"
        className="rounded-3xl relative w-full object-cover"
      />
      <div className="absolute top-27/28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-2.5 lg:top-1/2">
      <ModalSearch />
      </div>
    </div>
  );
};

export default ImageHero;