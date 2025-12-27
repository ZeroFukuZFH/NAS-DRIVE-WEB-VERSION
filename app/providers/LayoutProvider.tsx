import { createContext, Dispatch, SetStateAction } from "react";

interface LayoutProps {
    layout:boolean,
    setLayout:Dispatch<SetStateAction<boolean>>
}

export const LayoutContext = createContext<LayoutProps>({
    layout:true,
    setLayout:()=>{},
});

