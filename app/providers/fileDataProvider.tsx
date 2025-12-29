import { createContext } from "react";

export interface FileDataProps {
    image?:string,
    title?:string,
    fileType?:string,
    dateModified?:string,
}

export const FileDataContext = createContext<FileDataProps[]>([])