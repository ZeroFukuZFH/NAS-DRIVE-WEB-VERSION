import { ReactNode } from "react"
import Image from "next/image"
import ChevronDown from "../svg/chevron-down.svg"

interface DropDownMenuProps {
    className?:string,
    children?:ReactNode
    onClick?:()=>void
}

export default function DropDownMenuBorderless({
    className,
    children,
    onClick,
}:DropDownMenuProps){
    return (
        <button
          className={"min-w-30 w-36 h-12 p-2 rounded-2xl flex flex-row justify-evenly text-2xl items-center cursor-pointer hover:bg-[rgb(255,255,255,0.1)] " + className} 
          onClick={onClick}
        >
            {children}
            <Image src={ChevronDown} width={28} height={28} alt="null" className="invert brightness-0"/>
        </button>
    )
}