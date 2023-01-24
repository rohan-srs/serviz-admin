import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect } from "react";

// const Zoom = () => {
//   useEffect(() => {
//     const initialValue = document.body.style.zoom;

//     // Change zoom level on mount
//     document.body.style.zoom = "90%";

//     return () => {
//       // Restore default value
//       document.body.style.zoom = initialValue;
//     };
//   }, []);
//   return <></>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
