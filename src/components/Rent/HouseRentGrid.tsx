import { ApartmentDataType } from "@/src/types/types";
import { HouseRentCard } from "../common/HouseRentCard/HouseRentCard";

export default function HouseRentGrid({ houses }: { houses: ApartmentDataType[] }) {
  return (
    <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
      {(houses || []).map((house) => (
        <HouseRentCard
          key={house.id}
          title={house.title} 
          address={house.address}
          photo={house.photos?.[0]}
          rate={house.rate}
          price={house.price}
          capacity={house.capacity}
          bathroom={house.bathrooms}
          parking={house.parking}
          bedroom={house.rooms}
          yardType={house.yard_type}
          listId={house.id}
        />
      ))}
    </div>
  );
}