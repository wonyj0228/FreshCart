import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Price from "./Routes/Price";
import History from "./Routes/History";
import Login from "./Routes/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/price", element: <Price /> },
      { path: "/history", element: <History /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
