import ButtonGroup, { ButtonGroupChildren } from "@/custom_widgets/buttonGroup";

// SHADCN
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { CheckIcon, ChevronDown, ChevronRight, FolderOpen, InfoIcon, LayoutGridIcon, List, X } from "lucide-react";
import { useContext } from "react";
import { SortByModifiedContext } from "../providers/SortByModifiedProvider";
import { SortByTypeContext } from "../providers/SortByTypeProvider";
import { LayoutContext } from "../providers/LayoutProvider";

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

export default function AppFilterComponent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-wrap flex-row justify-between">
        <AddNew />
        <ToggleDisplay/>
      </div>

      <div className="flex flex-row gap-2">
        <TypeFilter/>
        <ModifiedFilter/>
      </div>
    </div>
  );
}
 
function TypeFilter() {
  const { type, setType } = useContext(SortByTypeContext);

  const handleTypeChange = (type: string) => {
    setType(type);
  };

  const handleDefaultType = (e: React.MouseEvent) => {
    e.stopPropagation();
    setType("Type");
  };

  return (
    <div className="flex flex-row gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`px-4 py-2 flex flex-row gap-2 w-32 justify-center border border-solid border-white transition-colors hover:bg-white/10 items-center ${
              type === "Type" ? "rounded-lg" : "rounded-l-lg"
            }`}
          >
            <span className="truncate">{type}</span>
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-mg shadow-black  border-none">
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

      {type !== "Type" && (
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

function ModifiedFilter() {
  const { mod, setMod } = useContext(SortByModifiedContext);

  const handleModChange = (mod: string) => {
    setMod(mod);
  };

  const handleDefaultMod = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMod("Modified");
  };

  return (
    <div className="flex flex-row gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`px-4 py-2 flex flex-row gap-2 w-32 justify-center border border-solid border-white transition-colors hover:bg-white/10 items-center ${
              mod === "Modified" ? "rounded-lg" : "rounded-l-lg"
            }`}
          >
            <span className="truncate">{mod}</span>
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

      {mod !== "Modified" && (
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

function AddNew() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 hover:bg-[rgba(255,255,255,0.1)] rounded-2xl flex flex-row gap-2">
          My Drive
          <ChevronDown />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 bg-[rgb(29,29,29)]" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            New folder
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            File upload
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            Folder upload
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ToggleDisplay() {
  const { layout, setLayout } = useContext(LayoutContext);

  const handleLayout = () => {
    setLayout((prev) => !prev);
  };

  return (
    <div className="flex flex-row flex-wrap items-center h-full gap-2">
      <ButtonGroup>
        <ButtonGroupChildren
          onClick={handleLayout}
          className={layout ? "bg-[rgb(0,65,108)]" : ""}
        >
          {layout && <CheckIcon />}
          <LayoutGridIcon />
        </ButtonGroupChildren>

        <ButtonGroupChildren
          onClick={handleLayout}
          className={!layout ? "bg-[rgb(0,65,108)]" : ""}
        >
          <List />
          {!layout && <CheckIcon />}
        </ButtonGroupChildren>
      </ButtonGroup>

      <button title="information" className="cursor-pointer">
        <InfoIcon />
      </button>
    </div>
  );
}