import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ShowList from "./components/ShowList/ShowList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShowList />
  </StrictMode>
);
