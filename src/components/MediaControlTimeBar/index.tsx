import { useAppStore } from "../../zustand"

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
      <div style={{ width: "100%", height: "1rem", backgroundColor: "gray" }}>
        <div style={{ width: progressPercent, height: "1rem", backgroundColor: "blue" }} />
      </div>
    </div>
  )
}