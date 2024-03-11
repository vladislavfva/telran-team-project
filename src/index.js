import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <div className="container">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  // </div>
);
