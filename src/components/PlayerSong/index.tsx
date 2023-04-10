import React from "react";
import styles from "./styles.module.css"
import { useAppStore } from "../../zustand";
import { AlbumCover } from "../AlbumCover";

export function PlayerSong() {

  const { currentlyPlaying } = useAppStore();

  return (
    <div className={styles.barSongContainer}>
      <AlbumCover
        className={styles.albumCover}
        albumSize="8rem"
        imageUrl={currentlyPlaying?.thumbnail}
      />
      <div className={styles.songDataContainer}>
        <span className={styles.songData__title}>{currentlyPlaying?.title}</span>
        <span className={styles.songData__uploader}>{currentlyPlaying?.uploaderName}</span>
      </div>
    </div>
  )

}