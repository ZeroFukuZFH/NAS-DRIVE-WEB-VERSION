"use client";

import NavigationBar, { NavigationBarChildren } from "@/custom_widgets/navigationBar";
import UploadButton from "../custom_widgets/uploadButton";
import StorageCapacity from "@/custom_widgets/storageCapacity";
import { useState } from "react";
import { MyDriveGridLayout, MyDriveListLayout } from "./components/nav_options/myDrive";
import AppBar from "./components/appBar";
import ButtonGroup, { ButtonGroupChildren } from "@/custom_widgets/buttonGroup";
import Image from "next/image";
import GridLayout from "../../svg/layout-grid.svg";
import ListLayout from "../../svg/list.svg";
import Check from "../../svg/check.svg";
import Info from "../../svg/info.svg";

const sampleData = [
  {title:"nigga",dateModified:"May 11, 2024"},
  {title:"nigga",dateModified:"May 11, 2024"},
  {title:"nigga",dateModified:"May 11, 2024"},
]

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
      <AppBar value={search} onChange={handleSearch}/>

      <div className="flex flex-wrap flex-row">
        <div className="px-2 py-2 flex flex-1 flex-wrap flex-col max-w-[10vw] min-w-70 gap-4">
          <UploadButton />
          <NavigationBar>
            <NavigationBarChildren>
              My Drive
          
            </NavigationBarChildren>
            <NavigationBarChildren>
              Recent
            </NavigationBarChildren>
            <NavigationBarChildren>
              Trash
            </NavigationBarChildren>
          </NavigationBar>
          <StorageCapacity />
        </div>

        <div className="m-2 flex flex-col flex-3 px-2 py-4 gap-2 w-full h-[88vh] rounded-2xl bg-[rgb(20,20,20)]">
          <DriveBody handleToggle={handleToggle} toggle={layout} />

          {layout ? <MyDriveListLayout files={sampleData}/> : <MyDriveGridLayout files={sampleData}/>}
        </div>
      </div>
    </div>
  );
}

function DriveBody({
  handleToggle,
  toggle,
}: {
  handleToggle: () => void;
  toggle: boolean;
}) {

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-wrap flex-row justify-between">
        {"My Drive (change later)"}
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

      <div className="flex flex-row gap-2">
        {"Type"}
        {"Modified"}
      </div>

    </div>
  );
}
 


