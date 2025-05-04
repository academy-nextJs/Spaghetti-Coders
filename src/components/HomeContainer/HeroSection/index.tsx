
import ImageHero from "./ImageHero"
import TextHero from "./TextHero"
const HeroSection = () => {
  return(
    <div className="flex flex-row justify-between mt-6">
      <ImageHero />
      <TextHero />
    </div>

  )
}

export default HeroSection;