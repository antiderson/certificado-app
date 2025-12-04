
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";

const token = localStorage.getItem("token");

// se não tiver token, manda pro Login.html
// if (!token) {
//   window.location.href = "/Login.html";
// } else {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// }
