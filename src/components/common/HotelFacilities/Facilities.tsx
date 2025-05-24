import { FacilitiesProps } from '@/src/types/types';

const Facilities: React.FC<FacilitiesProps> = ({
  FacilityData,
}) => {
  return (
    <div className={` grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 text-right rtl`}>
      
      {FacilityData.map((item,index) => (
        <div key={index} className="flex flex-col border-r-2 border-[#7575FE] pr-2">
        <span className="text-[#7575FE] text-lg font-medium">{item.label}</span>
          <span className=" mt-1">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
