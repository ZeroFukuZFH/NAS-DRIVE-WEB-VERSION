import { useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, ChartNoAxesColumnDecreasing, EllipsisVertical } from "lucide-react";

interface FileDataProps {
    image?:string,
    title?:string,
    fileType?:string,
    dateModified?:string,
}

export function AppListLayout({
    files,
}:{
    files:FileDataProps[]
}){
      const [sortAZ, setSortAZ] = useState(true);
      const [sortNewOld, setSortNewOld] = useState(true);
      const [SortOpt, setSortOpt] = useState(true);
    
      const handleSortAZ = () => {
        setSortAZ((prev) => !prev);
      };
    
      const handleSortNewOld = () => {
        setSortNewOld((prev) => !prev);
      };
    return (
        <div className="w-full flex flex-wrap flex-row justify-between text-[14px]">
            <div className="w-full border-s-[rgb(255,255,255,0.1)] border-b-2 flex text-[14px]">
                <button
                onClick={handleSortAZ}
                className="cursor-pointer flex flex-9 items-center flex-row gap-2 w-full p-2 hover:bg-[rgb(255,255,255,0.1)] rounded-t-lg"
                >
                <h1>Name</h1>
                {sortAZ ? <ArrowUpIcon/> : <ArrowDownIcon/>}
                </button>

                <button
                onClick={handleSortNewOld}
                className="cursor-pointer flex flex-3 flex-row items-center gap-2 w-full p-2 hover:bg-[rgb(255,255,255,0.1)] rounded-t-lg"
                >
                <h1>Date Modified</h1>
                </button>

                <button
                title="sort options"
                className="cursor-pointer flex flex-row gap-2 flex-1 p-2 justify-center"
                >
                <div className="rounded-2xl hover:bg-[rgb(255,255,255,0.1)] p-1">
                    <ChartNoAxesColumnDecreasing className="rotate-90"/>
                </div>
                </button>
            </div>
            {files.map((item,index)=>(
                <div key={index} className="w-full flex flex-row justify-between items-center border-b-[1] px-2 py-4 border-solid border-b-white hover:bg-[rgb(255,255,255,0.1)] cursor-pointer">
                    <div className="flex-9">{item.title}</div>
                    <div className="flex-3">{item.dateModified}</div>
                    <EllipsisVertical/>
                </div>
            ))}
        </div>
    )
}

export function AppGridLayout({
    files,
}:{
    files:FileDataProps[]
}){
    return (
        <div className="w-full flex flex-wrap flex-row text-[14px]">
            {files.map((item,index)=>(
                <div key={index} className=" flex flex-row w-2xs justify-between items-center p-2 hover:bg-[rgb(255,255,255,0.1)] cursor-pointer rounded-lg">
                    <div className="flex-9">{item.title}</div>
                    <EllipsisVertical/>
                </div>
            ))}
        </div>
    )
}