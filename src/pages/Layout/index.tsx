import React from "react";
import { Outlet } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";

export function Layout(){
  return (
    <div>
      <SearchBar/>
      <Outlet/>
    </div>
  )

}