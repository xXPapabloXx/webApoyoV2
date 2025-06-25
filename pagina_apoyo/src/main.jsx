import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Loader from "./components/Loader.jsx";
const App = lazy(() => import("./App.jsx"));
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
