import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
