
import Image from "next/image"
import Plus from "../svg/plus.svg"

export default function UploadButton(){
  return (
    <button className="cursor-pointer w-28 w min-h-14 text-[14px] bg-[rgb(48,50,52)] flex flex-wrap items-center justify-center shadow-black shadow-4xl rounded-2xl gap-1"> 
        <Image src={Plus} width={28} height={28} alt="null" className="invert brightness-0"/>
        New
    </button>
  )
}