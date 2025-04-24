import Image from "next/image";

interface StatCardProps {
    count: number;
    label: string;
    color: 'purple' | 'white';
    withAvatars?: boolean;
    height?: number; 
}
const StatCard: React.FC<StatCardProps> = ({ count, label, color, withAvatars = false, height = 200 }) => {
    const bgColor = color === 'purple' ? 'bg-[#DFDFFF]' : 'bg-white';

    const heightClass = height === 200 ? 'h-[200px]' : height === 700 ? 'h-[700px]' : 'h-[400px]';

    return (
        <div className={`${bgColor} ${heightClass} rounded-2xl p-4 shadow-sm flex flex-col items-start justify-center max-w-xs`}>
            <div className="text-right w-full">
                <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2 rtl">
                    {count}
                </p>
                <p className="text-sm text-gray-600 rtl">
                    {label}
                </p>

                {withAvatars && (
                    <div className="flex mt-3 rounded-full justify-start">
                        <Image
                            src="/avatar01.png"
                            alt="Avatar"
                            width={30}
                            height={30}
                            className="rounded-full w-8 h-8"
                        />
                        <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-white -mr-2 relative z-20"></div>
                        <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white -mr-2 relative z-30"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white relative z-40"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatCard;

