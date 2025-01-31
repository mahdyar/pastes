// src/components/Layout.tsx

import { Outlet } from "react-router";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <div className="bg-main-background h-screen px-4 w-full font-display relative">
      <div className="-z-0 fixed">
        <div className="bg-blue-500/30 w-[90vw] max-w-[450px] h-[90vw] max-h-[450px] rounded-full fixed -top-1/4 right-1/2 translate-x-1/2 sm:translate-0 sm:-right-22 sm:max-h-[400px] sm:max-w-[400px]"></div>
        <div className="bg-blue-500/30 w-[90vw] max-w-[450px] h-[90vw] max-h-[450px] rounded-full fixed -bottom-1/4 right-1/2 translate-x-1/2 sm:translate-0 sm:-left-22 sm:max-h-[400px] sm:max-w-[400px]"></div>
      </div>
      <div className="relative h-screen flex flex-col py-4 min-[1400px]:max-w-[1300px] min-[1700px]:max-w-[1600px] mx-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
