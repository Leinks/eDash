

import React from "react";
// import { Sidebar } from "./sidebar";

type MainProps = {
    children: React.ReactNode; // 👈️ type children
  };




export function MainLayout (props: MainProps){
    return(
        <section className="min-h-screen flex items-center justify-center pt-8 dark:text-gray-100 dark:bg-black duration-100">
        <main className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
            {props.children}
        </main>
    </section>
    )
}
