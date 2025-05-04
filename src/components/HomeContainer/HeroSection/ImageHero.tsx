import FilterButton from "./SearchButton"
import Image from "next/image"

const ImageHero = () => {
    return(
            <div className="w-1/2 h-[565px] rounded-2xl relative">
                  <Image
                      src="/hero.png"
                      alt="Modern apartment building"
                     layout="fill"
                     className="rounded-3xl"
                    />
                  <div className="absolute top-1/2 left-2.5 transform -translate-x-1/2 -translate-y-1/2">
                    <FilterButton />
                  </div> 
                  </div>
                  )
                }

export default ImageHero;