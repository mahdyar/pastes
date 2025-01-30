// src/components/Layout.tsx

import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="bg-main-background h-screen w-full font-display">
      <div className="bg-blue-500/40 w-[50vw] min-w-[280px] max-w-[350px] h-[50vw] min-h-[280px] max-h-[350px] rounded-full fixed -top-1/6 right-1/2 translate-x-1/2 sm:translate-0 sm:-right-22"></div>
      <div className="bg-blue-500/40 w-[50vw] min-w-[250px] max-w-[350px] h-[50vw] min-h-[250px] max-h-[350px] rounded-full fixed -bottom-1/6 right-1/2 translate-x-1/2 sm:translate-0 sm:-left-22"></div>
      <Outlet />
      
    </div>
  );
}
