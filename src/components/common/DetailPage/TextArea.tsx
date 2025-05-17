import { MyChip } from "@/src/components/common/Buttons/Chip-btn";
import { DetailsTextAreaProps } from "@/src/types/types";
import Image from "next/image";
import { MapWrapper } from "./MapComponents/MapWrapper";


export function TextArea({ chipText, descriptionText, photos, location, headingText}: DetailsTextAreaProps) {
  return (
    <aside className="flex flex-col gap-6">
      {chipText ?
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] font-black py-5 px-3">
          {chipText}
        </MyChip>
      : null}
      
      {photos && photos.length > 0 ?
        <div className="flex flex-wrap justify-center gap-4">
          {photos.map((image, i) => (
            <Image 
              key={i} 
              src={image} 
              alt='Scenery view of the building' 
              className="rounded-3xl w-full md:w-[45%] lg:w-[48%]"
              width={500}
              height={500}
              unoptimized
              loading="lazy"
            />
          ))}
        </div>
      : null}

      {location ? 
        <MapWrapper location={location}/>
      : null}

      {headingText ?
        <h1 className="text-2xl font-bold">{headingText}</h1>
      : null}

      {descriptionText ?
        <p>{descriptionText}</p>
      : null}
    </aside>
  );
}