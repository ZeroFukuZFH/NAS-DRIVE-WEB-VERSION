
import Search from "../svg/search.svg"
import SliderHorizontal from "../svg/sliders-horizontal.svg"

import Image from "next/image"

export default function SearchBar({
    value,
    onChange,
}:{
    value:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
}){
    return(
        <div className="rounded-3xl bg-[rgb(36,37,39)] flex px-4 py-3 gap-2 w-full items-center justify-center">
            <Image src={Search} width={28} height={28} alt="null" className="invert brightness-0"/>
            <div className="flex flex-row w-full justify-between items-center">
                <input placeholder="Search in Drive" type="text" className="outline-none w-full h-full" value={value} onChange={onChange}/>
                <Image src={SliderHorizontal} width={28} height={28} alt="null" className="invert brightness-0"/> 
            </div>
        </div>
    )
}



