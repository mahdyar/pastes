import "./main.css";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout.tsx";
import SlangPage from "./pages/Slang.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path=":slang" element={<SlangPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
