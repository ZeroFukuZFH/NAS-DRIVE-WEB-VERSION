import SearchBar from "@/custom_widgets/searchBar";
import Settings from "../../svg/settings.svg"
import Image from "next/image";
import Link from "next/link";

export default function AppBar({
  value,
  onChange,
}:{
  value:string,
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
}){
   
  return (
    <div>
        <div className="w-full flex flex-row justify-center items-center gap-2 z-10">
        <SearchBar 
            value={value} 
            onChange={onChange}
        />
        <button 
            title="settings" 
            className="hover:bg-[rgb(255,255,255,0.1)] p-2 max-h-10 rounded-4xl cursor-pointer"
        >
        <Link href={"/settings"}>
            <Image 
            src={Settings} 
            width={20} 
            height={20} 
            alt="null"
            className="invert brightness-0"
            />
        </Link>
        </button>
        </div>
    </div>

  )
}
