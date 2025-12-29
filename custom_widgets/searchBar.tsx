
import { CornerDownLeft, SearchIcon, SlidersHorizontalIcon, FolderOpen,ChevronRight, X, ChevronDown } from "lucide-react"
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FileDataContext, FileDataProps } from "@/app/providers/fileDataProvider";
import useFilterFiles from "@/app/custom-hooks/useFilterFiles";

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
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const data = useContext(FileDataContext) ?? [];

  const [type, setType] = useState("Type");
  const [mod, setMod] = useState("Modified");

  const filteredData : FileDataProps[] = useFilterFiles(data, type, mod, value)

  return (
    <div className="relative w-full max-w-xl">
      {/* Search input */}
      <div className="rounded-3xl flex flex-row px-4 py-3 gap-2 items-center bg-white dark:bg-neutral-900">
        <SearchIcon className="text-neutral-500" />
        <input
          placeholder="Search in Drive"
          type="text"
          className="outline-none w-full bg-transparent"
          value={value}
          onChange={onChange}
        />
        <SlidersHorizontalIcon className="text-neutral-500 cursor-pointer" />
      </div>

      {value.length > 0 && (
        <div className="absolute z-20 mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-lg">

          <div className="flex flex-row px-4 py-2 gap-2 border-b border-neutral-200 dark:border-neutral-700">
            <TypeFilter filter={type} setFilter={setType} />
            <ModifiedFilter filter={mod} setFilter={setMod} />
          </div>

          <div className="flex flex-col max-h-64 overflow-y-auto">
            {filteredData.length === 0 && (
              <p className="px-4 py-2 text-sm text-neutral-500">
                No results found
              </p>
            )}

            {filteredData.map((item, index) => (
              <button
                key={index}
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center px-4 py-2 border-t border-neutral-200 dark:border-neutral-700 text-sm">
            <button type="button" className="text-blue-600 hover:underline cursor-pointer">
              Advanced search
            </button>
            <button type="button" className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
              <CornerDownLeft size={16} />
              All search results
            </button>
          </div>
        </div>
      )}
    </div>
  );
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