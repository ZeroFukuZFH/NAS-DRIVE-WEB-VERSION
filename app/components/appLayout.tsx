import { useContext, useEffect, useState } from "react"
import { ArrowDownIcon, ArrowUpIcon, ChartNoAxesColumnDecreasing, EllipsisVertical, HardDrive, UploadCloudIcon } from "lucide-react";
import { useFileDrop } from "../custom-hooks/useFileDrop";
import { SortByTypeContext } from "../providers/SortByTypeProvider";
import { SortByModifiedContext } from "../providers/SortByModifiedProvider";
import useFilterFiles from "../custom-hooks/useFilterFiles";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { FileDataProps } from "../providers/fileDataProvider";

export function AppListLayout({
    files,
}:{
    files:FileDataProps[]
}){ 
    const { mod } = useContext(SortByModifiedContext);
    const { type } = useContext(SortByTypeContext);

    const filesToDisplay : FileDataProps[] = useFilterFiles(files,type,mod);

    const [sortAZ, setSortAZ] = useState(false);
    const [sortNewOld, setSortNewOld] = useState(false);

    const handleSortAZ = () => {
        setSortAZ(prev => !prev);        
    }

    const handleSortNewOld = () => {
        setSortNewOld(prev => !prev);
    }

    const { isDragging } = useFileDrop((files)=>{
        console.log("Dropped Files :",files);
        //POST REQUEST
    });

    return (
        <DragOverlayWrapper show={isDragging}>
        <div 
          className="w-full flex flex-wrap flex-row justify-between text-[14px]"
        >
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
                {sortNewOld ? <ArrowUpIcon/> : <ArrowDownIcon/>}
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
            {filesToDisplay.map((item,index)=>(
                <div key={index} className="w-full flex flex-row justify-between items-center border-b-[1] px-2 py-4 border-solid border-b-white hover:bg-[rgb(255,255,255,0.1)] cursor-pointer">
                    <div className="flex-9">{item.title}</div>
                    <div className="flex-3">{item.dateModified}</div>
                    <FileOptions/>
                </div>
            ))}
        </div>
        </DragOverlayWrapper>
    )
}

export function AppGridLayout({
    files,
}:{
    files:FileDataProps[]
}){

    const { mod } = useContext(SortByModifiedContext);
    const { type } = useContext(SortByTypeContext);

    const filesToDisplay : FileDataProps[] = useFilterFiles(files,type,mod);

    const { isDragging } = useFileDrop((files)=>{
        console.log("Dropped Files :",files);
        //POST REQUEST
    });
    return (
        <DragOverlayWrapper show={isDragging}>
            <div className="w-full flex flex-wrap flex-row text-[14px] ">
            {filesToDisplay.map((item,index)=>(
                <div key={index} className=" flex flex-row w-2xs justify-between items-center p-2 hover:bg-[rgb(255,255,255,0.1)] cursor-pointer rounded-lg">
                    <div className="flex-9">{item.title}</div>
                    <FileOptions/>
                </div>
            ))}
            </div>
        </DragOverlayWrapper>
    )
}

interface DragOverlayWrapperProps {
  show: boolean;
  children: React.ReactNode;
};

function DragOverlayWrapper({ show, children }: DragOverlayWrapperProps) {
  return (
    <div className="relative w-full h-full">
      {children}
      {show && <Overlay />}
    </div>
  );
}


function Overlay() {
  return (
    <div className="absolute inset-0 z-20 bg-blue-500/25 border-2 border-blue-500 pointer-events-none flex justify-center items-end pb-10">
        <Helper/>
    </div>
  );
}

function Helper() {
  return (
    <div className="flex flex-col w-64 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-medium shadow-md justify-center items-center gap-2">
      <UploadCloudIcon/>
      Drop files to upload them to
      <div className="flex flex-row gap-2">
        <HardDrive/>
        My Drive
      </div>
    </div>
  );
}

interface FileOptionsDataProps {
    title:string
}

const FileOptionsData : FileOptionsDataProps[] =  [
    {title:"download"},
    {title:"rename"},
    {title:"file information"},
    {title:"add to starred"},
]

function FileOptions(){
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button 
                  title="file options"
                  className="cursor-pointer"
                >
                    <EllipsisVertical/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    {FileOptionsData.map((item,index)=>(
                    <DropdownMenuItem key={index}>
                    {item.title}
                    </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}