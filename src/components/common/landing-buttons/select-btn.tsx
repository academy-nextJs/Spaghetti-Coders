import { Select, SelectItem, Avatar } from "@heroui/react";

export default function SelectBtn() {
    return (
        <Select className="w-[129px] h-[48px] rounded-full" label="رزرو سریع">
            <SelectItem
                key="argentina"
                startContent={
                    <Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />
                }
            >
                Argentina
            </SelectItem>
            <SelectItem
                key="venezuela"
                startContent={
                    <Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />
                }
            >
                Venezuela
            </SelectItem>
            <SelectItem
                key="brazil"
                startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />}
            >
                Brazil
            </SelectItem>
        </Select>
    );
}



