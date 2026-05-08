import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RickMortyApp } from "./RickMortyApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RickMortyApp />
  </StrictMode>,
);
