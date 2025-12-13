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
      <div className="animated-gradient h-[100dvh] px-4 w-full font-display relative overflow-hidden">
        {/* Floating orbs for glassmorphism effect */}
        <div className="-z-0 fixed inset-0 overflow-hidden pointer-events-none">
          <div className="floating-orb bg-gradient-to-r from-purple-400 to-pink-400 w-[400px] h-[400px] absolute -top-20 -right-20"></div>
          <div className="floating-orb bg-gradient-to-r from-blue-400 to-cyan-400 w-[350px] h-[350px] absolute top-1/2 -left-20" style={{ animationDelay: '5s' }}></div>
          <div className="floating-orb bg-gradient-to-r from-indigo-400 to-purple-400 w-[300px] h-[300px] absolute -bottom-20 right-1/3" style={{ animationDelay: '10s' }}></div>
        </div>
        <div className="relative h-[100dvh] flex flex-col py-4 min-[1400px]:max-w-[1300px] min-[1700px]:max-w-[1600px] mx-auto z-10">
          <Outlet />
          <Footer />
        </div>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </div>
    </>
  );
}
