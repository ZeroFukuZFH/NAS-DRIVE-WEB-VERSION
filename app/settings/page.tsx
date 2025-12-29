"use client";

import NavigationBar, { NavigationBarChildren } from "@/custom_widgets/navigationBar";
import AppBar from "./components/appBar";
import { JSX, ReactNode, useState } from "react";
import General from "./components/appGeneralSettings";


export default function Page() {
  const [section, setSection] = useState<JSX.Element>(<General/>)
  return (
    <div className="min-h-screen min-w-screen p-4">
      <AppBar/>
        <div className="p-2 flex flex-row">
            <div className="min-w-60">
                <NavigationBar>
                    <NavigationBarChildren>
                        General
                    </NavigationBarChildren>
                    <NavigationBarChildren>
                        Notifications
                    </NavigationBarChildren>
                </NavigationBar>
            </div>
            <div className="m-2 flex flex-col flex-3 px-2 py-4 gap-2 w-full h-[88vh] rounded-2xl ">
                <SettingsSection>
                    {section}
                </SettingsSection>
            </div>
        </div>
        
    </div>
  );
}
 
interface SettingsSectionsProps {
    children?:ReactNode,
}

function SettingsSection({
    children,
}:SettingsSectionsProps){
    return(
        <div>
            {children}
        </div>
    )
}

