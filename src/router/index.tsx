/*
* Copyright 2023 Dan Yael Sajarópulos Verdugo
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { searchLoader, SearchPage } from "../pages/Search";

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
        path: "search",
        element: <SearchPage />,
        loader: searchLoader,
        errorElement: <div>Error!</div>,
      }

    ]
  },
]);