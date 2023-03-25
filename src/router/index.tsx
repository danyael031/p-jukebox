import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { SearchPage } from "../pages/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element:  <div>root</div>,
      },
      {
        path: "/search",
        element: <SearchPage />,
      }

    ]
  },
]);