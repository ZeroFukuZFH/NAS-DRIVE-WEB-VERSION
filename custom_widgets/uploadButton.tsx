
import { DropdownMenuContent,DropdownMenu, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator  } from "@/components/ui/dropdown-menu"
import { FileUp, FolderPlus, FolderUp, PlusIcon } from "lucide-react"

export default function UploadButton(){
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer w-28 w min-h-14 text-[14px] flex flex-wrap items-center justify-center shadow-black shadow-4xl rounded-2xl gap-1"> 
        <PlusIcon/>
        New
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-translate-y-15 w-56 mx-2 rounded-none border-none">
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