import { Props } from '@/src/types/types';

const Facilities: React.FC<Props> = ({
  features,
  responsiveCols = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  className = '',
}) => {
  return (
    <div className={`grid ${responsiveCols} gap-y-6 text-right rtl ${className}`}>
      
      {features.map((item,index) => (
        <div key={index} className="flex flex-col border-r-2 border-[#7575FE] pr-2">
        <span className="text-[#7575FE] text-lg font-medium">{item.label}</span>
          <span className="text-black text-base mt-1">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
