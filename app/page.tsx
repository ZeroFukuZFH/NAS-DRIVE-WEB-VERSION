"use client";

import NavigationBar from "@/custom_widgets/navigationBar";
import UploadButton from "../custom_widgets/uploadButton";
import SearchBar from "@/custom_widgets/searchBar";
import StorageCapacity from "@/custom_widgets/storageCapacity";
import DropDownMenu from "@/custom_widgets/dropDownMenu";
import DropDownMenuBorderless from "@/custom_widgets/dropDownMenuBorderless";
import ButtonGroup, { ButtonGroupChildren } from "@/custom_widgets/buttonGroup";
import Image from "next/image";
import GridLayout from "../svg/layout-grid.svg";
import ListLayout from "../svg/list.svg";
import Check from "../svg/check.svg";
import Info from "../svg/info.svg";
import Settings from "../svg/settings.svg"
import { useState } from "react";


export default function Page() {
  const [layout, setLayout] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const handleToggle = () => {
    setLayout((prev) => !prev);
  };

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className="min-h-screen min-w-screen p-4 bg-[rgb(26,26,26)]">
      <TopBar value={search} onChange={handleSearch}/>

      <div className="flex flex-wrap flex-row">
        <div className="px-2 py-2 flex flex-1 flex-wrap flex-col max-w-[10vw] min-w-70 gap-4">
          <UploadButton />
          <NavigationBar />
          <StorageCapacity />
        </div>

        <div className="m-2 flex flex-col flex-3 px-2 py-4 gap-2 w-full h-[88vh] rounded-2xl bg-[rgb(20,20,20)]">
          <TopGroup handleToggle={handleToggle} toggle={layout} />
          
          <div className="flex flex-row gap-2">
            <DropDownMenu>Type</DropDownMenu>
            <DropDownMenu>Modified</DropDownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopBar({
  value,
  onChange,
}:{
  value:string,
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
}){
  return (
    <div className="w-full flex flex-row justify-center items-center gap-2">
      <SearchBar value={value} onChange={onChange}/>
      <button 
        title="settings" 
        className="hover:bg-[rgb(255,255,255,0.1)] p-2 max-h-10 rounded-4xl"
      >
        <Image 
          src={Settings} 
          width={20} 
          height={20} 
          alt="null"
          className="invert brightness-0"
        />
      </button>
    </div>
  )
}

function TopGroup({
  handleToggle,
  toggle,
}: {
  handleToggle: () => void;
  toggle: boolean;
}) {
  return (
    <div className="w-full flex flex-wrap flex-row justify-between">
      <DropDownMenuBorderless>My Drive</DropDownMenuBorderless>
      
      <div className="flex flex-row flex-wrap items-center h-full gap-2">
        <ButtonGroup>
          <ButtonGroupChildren
            onClick={handleToggle}
            className={toggle ? "bg-[rgb(0,65,108)]" : ""}
          >
            {toggle && (
              <Image
                src={Check}
                width={16}
                height={16}
                alt="selected"
                className="invert brightness-0"
              />
            )}
            <Image
              src={GridLayout}
              width={16}
              height={16}
              alt="grid layout"
              className="invert brightness-0"
            />
          </ButtonGroupChildren>

          <ButtonGroupChildren
            onClick={handleToggle}
            className={!toggle ? "bg-[rgb(0,65,108)]" : ""}
          >
            <Image
              src={ListLayout}
              width={16}
              height={16}
              alt="list layout"
              className="invert brightness-0"
            />
            {!toggle && (
              <Image
                src={Check}
                width={16}
                height={16}
                alt="selected"
                className="invert brightness-0"
              />
            )}
          </ButtonGroupChildren>
        </ButtonGroup>

        <button title="information" className="cursor-pointer">
          <Image
            src={Info}
            width={20}
            height={20}
            alt="info"
            className="invert brightness-0"
          />
        </button>
      </div>
    </div>
  );
}