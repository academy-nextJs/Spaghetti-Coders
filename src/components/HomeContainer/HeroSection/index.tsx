import ImageHero from "./ImageHero"
import TextHero from "./TextHero"

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-col md:w-full  lg:flex-row justify-between mt-14 ">
      <ImageHero />
      <TextHero />
    </div>
  )
}

export default HeroSection;
