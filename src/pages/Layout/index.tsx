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
import { Outlet, useNavigation } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
import { NavBar } from "../../components/NavBar";

export function Layout() {
  const navigation = useNavigation();

  navigation.state
  return (
    <div>
      <SearchBar />
      <NavBar />
      <div style={{ display: 'flex' }}>
        <div style={{ width: "50%", display: 'block' }}>
          {navigation.state === 'loading' ?
            <div>Loading...</div>
            :
            <Outlet />
          }
        </div>
      </div>
    </div>
  )

}