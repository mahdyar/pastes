import "./main.css";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path=":id" element={<>Hiii</>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
