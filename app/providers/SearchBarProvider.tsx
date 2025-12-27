import { createContext, Dispatch, SetStateAction } from "react";

interface SearchBarProps {
    search:string,
    setSearch:Dispatch<SetStateAction<string>>
}

export const SearchBarContext = createContext<SearchBarProps>({
    search:"",
    setSearch:()=>{},
});

