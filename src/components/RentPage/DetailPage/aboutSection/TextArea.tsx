import { MyChip } from "@/src/components/common/Buttons/Chip-btn";
import Image from "next/image";

interface DetailsTextAreaProps {
  chipText?: string;
  descriptionText: string;
  photos?: string[];
  location?: houseLocationType
  headingText?: string
}

interface houseLocationType {
  lat: number;
  lng: number
}

export function TextArea({ chipText, descriptionText, photos, location, headingText}: DetailsTextAreaProps) {
  return (
    <aside className="flex flex-col gap-6 mb-6">
      {chipText ?
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] font-black py-6 px-3">
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
              className="rounded-3xl basis-[48%]"
              // fill
              width={200}
              height={200}
              unoptimized
              loading="lazy"
            />
          ))}
        </div>
      : null}

      {location ? 
        'mapppppppppppppppppp'
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