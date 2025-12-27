import { createContext, Dispatch, SetStateAction } from "react";

interface TypeFilterProps {
    type:string,
    setType:Dispatch<SetStateAction<string>>
}
export const SortByTypeContext = createContext<TypeFilterProps>({
    type:"",
    setType:()=>{},
});

