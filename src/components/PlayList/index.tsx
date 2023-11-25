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
import { useAppStore } from "../../zustand";
import { SongItemComponent } from "../SongItem";


export function PlayList() {
  const queue = useAppStore(state => state.queue);
  return (

    <div style={{ width: "50%", display: 'block' }}>
      {
        queue.map((item) => {
          return (
            <SongItemComponent key={item.url} item={item} />
          )
        })
      }
    </div>
  )
}