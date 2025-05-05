import SearchModal from "./SearchModal";
import Image from "next/image";
// import SearchButton from "./SearchButton"
const ImageHero = () => {
  return (
    <div className="w-full h-[35.35rem]  sm:flex-center rounded-2xl relative">
      <Image
        src="/hero.png"
        alt="Modern apartment building"
        layout="fill"
        className="rounded-3xl relative  w-full object-cover"
      />
      <div className="lg:absolute  lg:top-1/2 lg:left-2.5 transform -translate-x-1/2 -translate-y-1/2  ">
        <SearchModal />
      </div>
    </div>
  );
};

export default ImageHero;