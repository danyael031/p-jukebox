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
import React, { useState } from "react";
import styles from "./styles.module.css";
import { DefaultAlbumCover } from "./DefaultAlbumCover";

const transparentPixel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

interface AlbumCoverProps {
  imageUrl?: string,
  albumSize: string,
  className?: string,
  style?: React.CSSProperties,
}

export function AlbumCover({
  imageUrl="",
  albumSize="20rem",
  className="",
  style= {} ,
}
  : AlbumCoverProps) {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleOnError = () => {setHasError(true)};

  const imageSrc = (hasError || !imageUrl )? transparentPixel : imageUrl;

  const internalSyle = {width: albumSize, height: albumSize}

  return (
    <div
      className={`${styles.albumCoverContainer} ${className}`}
      style={{
        ...internalSyle,
        ...style
      }}
    >
      <FallbackImage albumSize={albumSize}/>
      <img
        className={styles.albumCoverImage}
        src={imageSrc}
        onError={handleOnError}
      />
    </div>
  )

}

function FallbackImage({albumSize}:{albumSize: string}){
  return (
    <DefaultAlbumCover albumSize={albumSize} />
  )
}