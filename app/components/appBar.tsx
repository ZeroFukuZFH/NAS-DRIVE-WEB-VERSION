import SearchBar from "@/custom_widgets/searchBar";
import Link from "next/link";
import { SearchBarContext } from "../providers/SearchBarProvider";
import { useContext } from "react";
import { SettingsIcon } from "lucide-react";

export default function AppBar(){
  const { search, setSearch } = useContext(SearchBarContext);

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div>
        <div className="w-full flex flex-row justify-center items-center gap-2 z-10">
        <SearchBar 
            value={search} 
            onChange={handleSearch}
        />
        <button 
            title="settings" 
            className="p-2 max-h-10 rounded-4xl cursor-pointer"
        >
        <Link href={"/settings"}>
            <SettingsIcon/>
        </Link>
        </button>
        </div>
    </div>

  )
}
