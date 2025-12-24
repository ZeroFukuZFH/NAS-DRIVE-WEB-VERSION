import { ReactNode } from "react"

interface ButtonGroupProps {
    children?:ReactNode,
}

export default function ButtonGroup({
    children,
    
}:ButtonGroupProps){
    return(
        <div className="flex flex-row border justify-center overflow-hidden border-white border-solid rounded-2xl w-30 py-0 h-9">
            {children}
        </div>
    )
}

interface ButtonGroupChildrenProps {
    children?:ReactNode,
    onClick?:()=>void,
    className?:string,
}

export function ButtonGroupChildren({
    children,
    onClick,
    className,
}:ButtonGroupChildrenProps){
    return (
        <button 
          className={"border-x border-white border-solid px-2 py-0 h-full w-full flex flex-row cursor-pointer justify-center border " + className}
          onClick={onClick}
        >
            {children}
        </button>
    )
}