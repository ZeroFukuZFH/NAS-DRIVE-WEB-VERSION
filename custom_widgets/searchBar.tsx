
import { CornerDownLeft, SearchIcon, SlidersHorizontalIcon, FolderOpen,ChevronRight, X, ChevronDown } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const typeData = [
  {title:"Folders",icon:<FolderOpen/>},
  {title:"Documents",icon:<FolderOpen/>},
  {title:"Spreadsheets",icon:<FolderOpen/>},
  {title:"Presentations",icon:<FolderOpen/>},
  {title:"Videos",icon:<FolderOpen/>},
  {title:"Photos & Images",icon:<FolderOpen/>},
  {title:"PDFs",icon:<FolderOpen/>},
  {title:"Audio",icon:<FolderOpen/>},
  {title:"Archives (zip) ",icon:<FolderOpen/>},
]

const modifiedData = [
    {title:"Today"},
    {title:"Last 7 days"},
    {title:"Last 30 days"},
    {title:"This year " + "(" + new Date().getFullYear() + ")"},
    {title:"Last year " + "(" + (new Date().getFullYear()-1) + ")"},
]

export default function SearchBar({
    value,
    onChange,
}:{
    value:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
}){
    const [type,setType] = useState<string>("Type");
    const [mod,setMod] = useState<string>("Modified");
    return(
        <div className="rounded-3xl flex flex-col px-4 py-3 gap-2 w-full items-center justify-center">
            <div className="flex flex-row w-full justify-between items-center gap-2">
                <SearchIcon/>
                <input placeholder="Search in Drive" type="text" className="outline-none w-full h-full" value={value} onChange={onChange}/>
                <SlidersHorizontalIcon/>
            </div>
            {value.length > 0 &&
            <div className=" w-full flex flex-col">
                <div className="flex flex-row w-full">
                    <TypeFilter filter={type} setFilter={setType}/>
                    <ModifiedFilter filter={mod} setFilter={setMod}/>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <button className="cursor-pointer">
                    Advanced search
                    </button>
                    <button className="flex flex-row gap-2 cursor-pointer">
                        <CornerDownLeft/>
                        All search results
                    </button>
                </div>
            </div>
            }
        </div>
    )
}

interface FilterProps {
    filter:string,
    setFilter:Dispatch<SetStateAction<string>>
}

function TypeFilter({
    filter,
    setFilter
}:FilterProps) {
  

  const handleTypeChange = (type: string) => {
    setFilter(type);
  };

  const handleDefaultType = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFilter("Type");
  };

  return (
    <div className="flex flex-row gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`px-4 py-2 flex flex-row gap-2 w-32 justify-center border border-solid border-white transition-colors hover:bg-white/10 items-center ${
              filter === "Type" ? "rounded-lg" : "rounded-l-lg"
            }`}
          >
            <span className="truncate">{filter}</span>
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-mg shadow-black border-none">
          <DropdownMenuGroup className="w-56">
            {typeData.map((item, index) => (
              <DropdownMenuItem key={index} onClick={() => handleTypeChange(item.title)}>
                {item.icon}
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {filter !== "Type" && (
        <button
          title="close"
          className="rounded-r-lg px-2 flex flex-row gap-2 border justify-center border-white transition-colors hover:bg-white/10 items-center"
          onClick={handleDefaultType}
        >
          <X />
        </button>
      )}
    </div>
  );
}

function ModifiedFilter({
    filter,
    setFilter
}:FilterProps) {
  

  const handleModChange = (mod: string) => {
    setFilter(mod);
  };

  const handleDefaultMod = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFilter("Modified");
  };

  return (
    <div className="flex flex-row gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`px-4 py-2 flex flex-row gap-2 w-32 justify-center border border-solid border-white transition-colors hover:bg-white/10 items-center ${
              filter === "Modified" ? "rounded-lg" : "rounded-l-lg"
            }`}
          >
            <span className="truncate">{filter}</span>
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-mg shadow-black  border-none">
          <DropdownMenuGroup className="w-56">
            {modifiedData.map((item, index) => (
              <DropdownMenuItem key={index} onClick={() => handleModChange(item.title)}>
                {item.title}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              Custom date range
              <ChevronRight />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {filter !== "Modified" && (
        <button
          title="close"
          className="rounded-r-lg px-2 flex flex-row gap-2 border justify-center border-white transition-colors hover:bg-white/10 items-center"
          onClick={handleDefaultMod}
        >
          <X />
        </button>
      )}
    </div>
  );
}       


