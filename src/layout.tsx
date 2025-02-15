// src/components/Layout.tsx

import { Outlet } from "react-router";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function Layout() {
  return (
    <>
      <Helmet>
        <title>Pastes | پیستز</title>
        <meta name="title" content="Pastes | پیستز" />
        <meta name="description" content="Paste and share on Pastes.ir" />
        <meta property="og:title" name="title" content="Pastes | پیستز" />
        <meta
          property="og:description"
          name="description"
          content="Paste and share on Pastes.ir"
        />
      </Helmet>
      <div className="bg-main-background h-[100dvh] px-4 w-full font-display relative">
        <div className="-z-0 fixed">
          <div className="bg-blue-500/30 w-[90vw] max-w-[450px] h-[90vw] max-h-[450px] rounded-full fixed -top-1/4 right-1/2 translate-x-1/2 sm:translate-0 sm:-right-22 sm:max-h-[400px] sm:max-w-[400px]"></div>
          <div className="bg-blue-500/30 w-[90vw] max-w-[450px] h-[90vw] max-h-[450px] rounded-full fixed -bottom-1/4 right-1/2 translate-x-1/2 sm:translate-0 sm:-left-22 sm:max-h-[400px] sm:max-w-[400px]"></div>
        </div>
        <div className="relative h-[100dvh] flex flex-col py-4 min-[1400px]:max-w-[1300px] min-[1700px]:max-w-[1600px] mx-auto">
          <Outlet />
          <Footer />
        </div>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </div>
    </>
  );
}
