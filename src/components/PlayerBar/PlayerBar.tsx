import React, { useEffect, useState } from "react";
import { audioPlayer } from "../../audioPlayer";
import { service } from "../../service";
import { AudioStream } from "../../types/service";
import { useAppStore } from "../../zustand";
import { PlayPauseButton, SkipNextButton, SkipPreviousButton } from "./PlayerButtons";
import styles from './styles.module.css';


export function MediaControl(){


  const playStatus = useAppStore(store=>store.playStatus);
  const [songData, setSongData] = useState<AudioStream| null>(null)

  async function fetchPlayerData(){
    let response = await service.getStream("B2lmOei7qfk");

    let sortAudioStream = response.data.audioStreams.sort((a, b)=> ( b.bitrate - a.bitrate ));

    let streamSong = sortAudioStream[0];

    if(!streamSong){
      return
    }
    
    console.log({
      streamSong,
      sortAudioStream
    })

    setSongData(streamSong);
    audioPlayer.setAttribute("src", streamSong?.url);
  }

  useEffect(()=>{fetchPlayerData()}, [])

  function playPauseControl(){

    if(!songData){
      return
    }

    if(playStatus === 'paused'){
      audioPlayer.play();
      return
    }

    if(playStatus === "playing"){
      audioPlayer.pause();
      return
    }
  }

  return (
    <div className={styles.mediaControlContainer}>
      <SkipPreviousButton
        onClick={()=>{ alert("Si Sirvo, pinche perro")}}
      />
      <PlayPauseButton
        isPlaying={playStatus === 'playing'}
        onClick={playPauseControl}
        isDisabled={playStatus === 'disabled'}
      />
      <SkipNextButton
        onClick={()=>{ alert("Si Sirvo, pinche perro")}}
      />
    </div>
  )
}