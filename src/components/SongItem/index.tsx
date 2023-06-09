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
import { SongItem } from "../../types/service";
import { useAppStore } from "../../zustand";
import { AlbumCover } from "../AlbumCover";
import styles from "./styles.module.css";

export function SongItemComponent({ item }: { item: SongItem }) {

  const addToQueue = useAppStore((state) => state.addToQueue)

  const handleOnClick = () => {
    addToQueue(item);
  }

  return (
    <div className={styles.songItemContainer} onClick={handleOnClick}>
      <AlbumCover className={styles.albumCover} albumSize="8rem" imageUrl={item.thumbnail}/>
      <span>{item.title}</span>
    </div>
  )

}

