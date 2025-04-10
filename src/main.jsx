import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { StrictMode } from "react";

<html data-theme="cupcake"></html>;

createRoot(document.getElementById("root")).render(
  <>
    {/* <Navbar /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
