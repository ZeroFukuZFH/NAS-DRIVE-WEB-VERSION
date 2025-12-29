"use client";

// REACT
import { useEffect, useState } from "react";

// USER-DEFINED
import AppBar from "./components/appBar";
import AppSideBar  from "./components/appSideBar";
import { AppGridLayout, AppListLayout } from "./components/appLayout";
import  AppFilterComponent  from "./components/appFilterComponent"
import { SearchBarContext } from "./providers/SearchBarProvider";
import { SortByModifiedContext } from "./providers/SortByModifiedProvider";
import { SortByTypeContext } from "./providers/SortByTypeProvider";
import { LayoutContext } from "./providers/LayoutProvider";
import { FileDataContext, FileDataProps  } from "./providers/fileDataProvider";

export default function Page() {

  const sampleData : FileDataProps[] = [
    {title:"Albert",dateModified:"May 11, 2024",fileType:"Folders"},
    {title:"Binance",dateModified:"May 12, 2024",fileType:"Documents"},
    {title:"Carmen",dateModified:"May 13, 2024",fileType:"Spreadsheets"},
  ]

  const [data,setData] = useState<FileDataProps[]>([])

  useEffect(()=>{
    try {
      // FETCH METHOD
    } catch (error) {
      console.error("Failed to fetch data , ",error);
    }
  },[])
  
  const [layout, setLayout] = useState<boolean>(true);
  const [mod,setMod] = useState<string>("Modified");
  const [type,setType] = useState<string>("Type");
  const [search, setSearch] = useState<string>("");

  return (
    <FileDataContext.Provider value={sampleData.concat(data)}>
    <LayoutContext.Provider value={{layout,setLayout}}>
    <SearchBarContext.Provider value={{search,setSearch}}>
    <SortByModifiedContext.Provider value={{mod,setMod}}>
    <SortByTypeContext.Provider value={{type,setType}}>
      <div className="min-h-screen min-w-screen p-4">
        <AppBar/>
        
        <div className="flex flex-wrap flex-row">
          <AppSideBar/>

          <div className="m-2 flex flex-col flex-3 px-2 py-4 gap-2 w-full h-[88vh] rounded-2xl">
            <AppFilterComponent />

            {layout ? <AppListLayout files={sampleData}/> : <AppGridLayout files={sampleData}/>}
          </div>
        </div>
      </div>
    </SortByTypeContext.Provider>
    </SortByModifiedContext.Provider>
    </SearchBarContext.Provider>
    </LayoutContext.Provider>
    </FileDataContext.Provider>
  );
}



