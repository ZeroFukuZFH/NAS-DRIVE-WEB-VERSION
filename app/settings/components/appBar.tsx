import Link from "next/link"
import ArrowLeft from "../../../svg/arrow-left.svg"
import Image from "next/image"

export default function AppBar(){
    return (
        <div className="flex flex-row w-full items-center gap-2">
            <div className="p-1 rounded-3xl hover:bg-[rgb(255,255,255,0.1)]">
                <Link href={"/"}>
                    <Image 
                    src={ArrowLeft}
                    width={28}
                    height={28}
                    alt="null"
                    className="invert cursor-pointer"
                    />
                </Link>
            </div>
            <h1 className="text-2xl">Settings</h1>
        </div>
    )
}