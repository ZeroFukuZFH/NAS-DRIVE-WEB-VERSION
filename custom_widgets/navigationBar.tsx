"use client"

import { ReactNode } from "react"
interface NavigationBarProps {
  children?:ReactNode,
}

export default function NavigationBar({
  children,
}:NavigationBarProps) {

  return (
    <div>
      <ul className="flex flex-col">
        {children}
      </ul>
    </div>
  )
}

interface NavigationBarChildrenProps {
  children?:ReactNode,
  onClick?:()=>void,
  className?:string
}

export function NavigationBarChildren({
  children,
  onClick,
  className,
}:NavigationBarChildrenProps){
  return(
    <li>
      <button
        className={`px-4 py-1 rounded-2xl min-w-28 w-full cursor-pointer text-[14px] text-left active:bg-[rgb(0,65,108)]  hover:bg-[rgba(255,255,255,0.2)] ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  )
}