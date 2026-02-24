// ===== ENTRY POINT =====
// This is the first file React loads.
// It mounts the <App /> component into the #root div in index.html

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <App />
);
