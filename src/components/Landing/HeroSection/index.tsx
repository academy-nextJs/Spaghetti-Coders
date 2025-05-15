import ImageHero from "./ImageHero"
import TextHero from "./TextHero"
const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-1/2 ">
        <ImageHero />
      </div>
      <div className="w-full lg:w-1/2">
        <TextHero />
      </div>
    </div>
  )
}
export default HeroSection;