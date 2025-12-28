import { useTheme } from "next-themes"
import { ReactNode } from "react"

export default function General(){
    const { theme,setTheme } = useTheme();
    return (
        <div className="flex flex-col w-full h-full">
            <OptionWrapper>
                <h1>Storage</h1>
            </OptionWrapper>
            <OptionWrapper>
                <h1>Start Page</h1>
            </OptionWrapper>
            <OptionWrapper>
                <h1>Appearance</h1>
                
                <input type="radio" id="light" name="theme" value="light" onChange={() => setTheme("light")} checked={theme === "light"}/>
                <label htmlFor="light">Light</label>

                <input type="radio" id="dark" name="theme" value="dark" onChange={() => setTheme("dark")} checked={theme === "dark"} />
                <label htmlFor="dark">Dark</label>

                <input type="radio" id="device" name="theme" value="system" onChange={() => setTheme("system")} checked={theme === "system"} />
                <label htmlFor="device">Device default</label>
            </OptionWrapper>
            <OptionWrapper>
                <h1>Storage</h1>
            </OptionWrapper>
            <OptionWrapper>
                <h1>Storage</h1>
            </OptionWrapper>
            </div>
    )
}

function OptionWrapper({
    children
}:{children?:ReactNode}){
    return (
        <div className="flex flex-col border-b-2 border-solid border-white w-full h-full">
            {children}
        </div>
    )
}