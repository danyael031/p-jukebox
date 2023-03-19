import React, { useState } from "react";
import { PlayPauseButton, SkipNextButton, SkipPreviousButton } from "./PlayerButtons";
import styles from './styles.module.css';


export function MediaControl(){

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlaying = ()=>{ setIsPlaying(!isPlaying)};

  return (
    <div className={styles.mediaControlContainer}>
      <SkipPreviousButton
        onClick={()=>{ alert("Si Sirvo, pinche perro")}}
      />
      <PlayPauseButton
        isPlaying={isPlaying}
        onClick={togglePlaying}
      />
      <SkipNextButton
        onClick={()=>{ alert("Si Sirvo, pinche perro")}}
      />
    </div>
  )
}