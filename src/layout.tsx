// src/components/Layout.tsx

import { Outlet } from "react-router";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <div className="bg-main-background p-4 h-screen w-full font-display relative">
      <div className="relative -z-0">
        <div className="bg-blue-500/30 w-[90vw] max-w-[450px] h-[90vw] max-h-[450px] rounded-full fixed -top-1/4 right-1/2 translate-x-1/2 sm:translate-0 sm:-right-22 sm:max-h-[400px] sm:max-w-[400px]"></div>
        <div className="bg-blue-500/30 w-[90vw] max-w-[450px] h-[90vw] max-h-[450px] rounded-full fixed -bottom-1/4 right-1/2 translate-x-1/2 sm:translate-0 sm:-left-22 sm:max-h-[400px] sm:max-w-[400px]"></div>
      </div>
      <div className="relative">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
