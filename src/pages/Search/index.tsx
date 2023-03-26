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
import { LoaderFunction, LoaderFunctionArgs, useLoaderData, redirect } from "react-router-dom";
import { SongItem } from "../../components/SongItem";
import { service } from "../../service";
import { LoaderData } from "../../types/react-router-dom";

export function SearchPage() {
  const { data } = useLoaderData() as LoaderData<typeof searchLoader>;

  return (
    <div>
      sarchPage
      {data.items.map((item, index) => {
        return (
          <SongItem key={item.url} item={item}/>
        )
      })}
    </div>
  )
}



export const searchLoader = (async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q") || "";
  return service.search(searchTerm);
}) satisfies LoaderFunction