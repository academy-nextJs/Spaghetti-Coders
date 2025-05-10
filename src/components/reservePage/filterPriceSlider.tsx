'use client';
import { ReserveInitialValProps } from '@/src/types/types';
import ClientSlider from '../common/Range-slider/range-slider';

type Props = {
  value: [number, number];
  onChangeEnd: (value: [number, number]) => void;
  initialValues: ReserveInitialValProps
};

export default function FilterPriceSlider({ value, onChangeEnd }: Props) {
  return (
    <div className="w-full">
      <div className="flex justify-between w-3/4 mx-auto text-lg">
        <p>
          <span className="text-gray-400 ml-6">قیمت از</span> {value[0]} تومان
        </p>
        <p>
          <span className="text-gray-400 ml-6">تا</span> {value[1]} تومان
        </p>
      </div>
      <ClientSlider
        defaultValue={value}
        maxValue={1_000_000}
        minValue={100_000}
        step={5000}
        onChangeEnd={(val) => {
          const [min, max] = Array.isArray(val) ? val : [val, val];
          onChangeEnd([min, max]);
        }}
        aria-label="قیمت"
        classNames={{ filler: 'bg-[#7575FE]' }}
        renderThumb={(props) => (
          <div
            {...props}
            className="group p-1 top-1/2 bg-[#7575FE] border-2 border-background shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span className="transition-transform bg-background rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
          </div>
        )}
      />
    </div>
  );
}
