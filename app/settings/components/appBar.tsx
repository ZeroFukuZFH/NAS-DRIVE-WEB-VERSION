import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

export default function AppBar(){
    return (
        <div className="flex flex-row w-full items-center gap-2">
            <div className="p-1 rounded-3xl hover:bg-[rgb(255,255,255,0.1)]">
                <Link href={"/"}>
                    <ArrowLeftIcon/>
                </Link>
            </div>
            <h1 className="text-2xl">Settings</h1>
        </div>
    )
}