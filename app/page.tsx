"use client";

// REACT
import { useState } from "react";

// USER-DEFINED
import AppBar from "./components/appBar";
import AppSideBar  from "./components/appSideBar";
import { AppGridLayout, AppListLayout } from "./components/appLayout";
import  AppFilterComponent  from "./components/appFilterComponent"
import { SearchBarContext } from "./providers/SearchBarProvider";
import { SortByModifiedContext } from "./providers/SortByModifiedProvider";
import { SortByTypeContext } from "./providers/SortByTypeProvider";
import { LayoutContext } from "./providers/LayoutProvider";

const sampleData = [
  {title:"nigga",dateModified:"May 11, 2024"},
  {title:"nigga",dateModified:"May 11, 2024"},
  {title:"nigga",dateModified:"May 11, 2024"},
]

export default function Page() {

  const [layout, setLayout] = useState<boolean>(true);
  const [mod,setMod] = useState<string>("Modified");
  const [type,setType] = useState<string>("Type");
  const [search, setSearch] = useState<string>("");
  
  return (
    <LayoutContext.Provider value={{layout,setLayout}}>
    <SearchBarContext.Provider value={{search,setSearch}}>
    <SortByModifiedContext.Provider value={{mod,setMod}}>
    <SortByTypeContext.Provider value={{type,setType}}>
      <div className="min-h-screen min-w-screen p-4 bg-[rgb(26,26,26)]">
        <AppBar/>
        
        <div className="flex flex-wrap flex-row">
          <AppSideBar/>

          <div className="m-2 flex flex-col flex-3 px-2 py-4 gap-2 w-full h-[88vh] rounded-2xl bg-[rgb(20,20,20)]">
            <AppFilterComponent />

            {layout ? <AppListLayout files={sampleData}/> : <AppGridLayout files={sampleData}/>}
          </div>
        </div>
      </div>
    </SortByTypeContext.Provider>
    </SortByModifiedContext.Provider>
    </SearchBarContext.Provider>
    </LayoutContext.Provider>
  );
}



