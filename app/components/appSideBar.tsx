import NavigationBar, { NavigationBarChildren } from "@/custom_widgets/navigationBar";

import { DropdownMenuContent,DropdownMenu, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator  } from "@/components/ui/dropdown-menu"
import { FileUp, FolderPlus, FolderUp, Plus } from "lucide-react"

export default function AppSideBar() {
  return (
    <div className="px-2 py-2 flex flex-1 flex-wrap flex-col max-w-[10vw] min-w-70 gap-4">
      <UploadButton />
      <NavigationBar>
        <NavigationBarChildren>
          My Drive

        </NavigationBarChildren>
        <NavigationBarChildren>
          Recent
        </NavigationBarChildren>
        <NavigationBarChildren>
          Trash
        </NavigationBarChildren>
      </NavigationBar>
      <StorageCapacity />
    </div>
  );
}

function StorageCapacity() {
  const storage_used: number = 1 
  const total_storage: number = 15

  const usedPercentage = (storage_used / total_storage) * 100

  const handleBarColor = () : string => {
    if(usedPercentage < 34){
        return "bg-green-500";
    }
    if(usedPercentage < 66){
        return "bg-orange-500";
    }
    return "bg-red-500";
  }

  return (
    <div className="flex flex-col w-full px-2 py-2">
      <div className="bg-amber-50 w-full h-1 rounded overflow-hidden">
        <div 
        className={`h-full transition-all duration-300 ${handleBarColor()}`}
        style={{ width: `${usedPercentage}%` }}
        />
      </div>
      <h1 className="mt-2 text-white text-[14px]">
        {storage_used} of {total_storage} GB used
      </h1>
    </div>
  )
}

function UploadButton(){
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer w-28 w min-h-14 text-[14px] bg-[rgb(48,50,52)] flex flex-wrap items-center justify-center shadow-black shadow-4xl rounded-2xl gap-1"> 
          <Plus/>
          New
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-translate-y-15 w-56 mx-2 rounded-none border-none bg-[rgb(29,29,29)]">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FolderPlus/>
            New Folder
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FolderUp/>
              File upload
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileUp/>
              Folder upload
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}