import { useAppStore } from "../../zustand";
import styles from "./styles.module.css"


function calculateSongProgress(songDuration: number, songProgress: number): number{

  let songProgressPercent = (songProgress / songDuration) * 100;

  if(isNaN(songProgress)){
    return 0;
  }

  return songProgressPercent
}


export function MediaControlTimeBar() {

  const { currentSongDuration, currentSongProgress } = useAppStore();

  const songProgressPercent = calculateSongProgress(currentSongDuration, currentSongProgress);

  const progressPercent = `${songProgressPercent}%`

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.progressBar__lineContainer}>
        <div className={styles.progressBar__line} style={{ width: progressPercent }} />
      </div>
    </div>
  )
}