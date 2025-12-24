import { ReactNode } from "react"
import Image from "next/image"
import ChevronDown from "../svg/chevron-down.svg"

interface DropDownMenuProps {
    className?:string,
    children?:ReactNode
    onClick?:()=>void
}

export default function DropDownMenu({
    className,
    children,
    onClick,
}:DropDownMenuProps){
    return (
        <button
          className={"min-w-30 h-12 py-2 rounded-lg border-solid border flex flex-row justify-evenly text-[14px] items-center border-white cursor-pointer hover:bg-[rgb(255,255,255,0.1)] " + className} 
          onClick={onClick}
        >
            {children}
            <Image src={ChevronDown} width={28} height={28} alt="null" className="invert brightness-0"/>
        </button>
    )
}