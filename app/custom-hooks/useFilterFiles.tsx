import { useMemo } from "react";
import { FileDataProps } from "../providers/fileDataProvider";

export default function useFilterFiles(files:FileDataProps[],type:string,mod:string,search?:string) {
    const filteredFiles = useMemo(()=>{
        let result = files

        if (search !== undefined) {
            const query = search.toLowerCase();
            result = result.filter((item) => {
                const itemRef = item.title?.toLowerCase() ?? "";
                return itemRef.includes(query);
            });
        }
            
        if(type !== "Type") 
            result = files.filter((item)=>item.fileType === type)
        
        if(mod !== "Modified") 
            result = files.filter((item)=>item.dateModified === mod)   

        return result
    },[files,type,mod,search])
    
    return filteredFiles;
}