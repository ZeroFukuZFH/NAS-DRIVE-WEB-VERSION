
import Image from "next/image"
import Plus from "../svg/plus.svg"
import { DropdownMenuContent,DropdownMenu, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator  } from "@/components/ui/dropdown-menu"
import { FileUp, FolderPlus, FolderUp } from "lucide-react"

export default function UploadButton(){
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer w-28 w min-h-14 text-[14px] bg-[rgb(48,50,52)] flex flex-wrap items-center justify-center shadow-black shadow-4xl rounded-2xl gap-1"> 
          <Image src={Plus} width={28} height={28} alt="null" className="invert brightness-0"/>
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