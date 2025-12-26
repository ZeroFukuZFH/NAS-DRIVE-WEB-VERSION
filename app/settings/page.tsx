"use client";

import NavigationBar, { NavigationBarChildren } from "@/custom_widgets/navigationBar";
import AppBar from "./components/appBar";
import { ReactNode } from "react";

export default function Page() {
  
  return (
    <div className="min-h-screen min-w-screen p-4 bg-[rgb(26,26,26)]">
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
            <div className="m-2 flex flex-col flex-3 px-2 py-4 gap-2 w-full h-[88vh] rounded-2xl bg-[rgb(20,20,20)]">
                <SettingsSection>

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

