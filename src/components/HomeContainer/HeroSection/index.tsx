import ImageHero from "./ImageHero"
import TextHero from "./TextHero"

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center mt-14 w-full 2xl:container 2xl:mx-auto">
      <div className="w-full  2xl:w-1/2 ">
        <ImageHero />
      </div>
      <div className="w-full lg:w-1/2">
        <TextHero />
      </div>
    </div>
  )
}

export default HeroSection;