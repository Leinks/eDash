

import React from "react";
import { Sidebar } from "./sidebar";

type MainProps = {
    children: React.ReactNode; // 👈️ type children
  };

// export function MainLayout((props: MainProps)) {
//   return (
//     <div className="flex gap-5">
//       <Sidebar />
//       <main className="max-w-5xl flex-1 mx-auto py-4">{props.children}</main>
//     </div>
//   );
// }

// import React from "react";

// type MainProps = {
//     children: React.ReactNode; // 👈️ type children
//   };



export function MainLayout (props: MainProps){

    return(
        <div className="min-h-screen flex items-center justify-center p-4">
            <Sidebar />
            <main className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
                {props.children}
            </main>
        </div>
    )
}
