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
    let response = await service.getStream("fHI8X4OXluQ");

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