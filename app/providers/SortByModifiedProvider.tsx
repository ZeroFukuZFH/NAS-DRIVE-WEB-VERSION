import { createContext, Dispatch, SetStateAction } from "react";

interface ModifiedFilterProps {
    mod:string,
    setMod:Dispatch<SetStateAction<string>>
}
export const SortByModifiedContext = createContext<ModifiedFilterProps>({
    mod:"",
    setMod:()=>{},
});

