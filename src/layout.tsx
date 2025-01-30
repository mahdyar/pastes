// src/components/Layout.tsx

import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="bg-main-background h-screen font-display">
      <Outlet />
    </div>
  );
}
