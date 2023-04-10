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
import React, { EffectCallback, useEffect } from "react";
import { service } from "../service";
import { useAppStore } from "../zustand";

export function useSetAudioPlayerEvents(audioPlayer: HTMLAudioElement) {
  const play = useAppStore(state => state.play);
  const pause = useAppStore(state => state.pause);
  const nextSong = useAppStore(state => state.nextSong);
  const updateSongDuration = useAppStore(state => state.updateSongDuration);
  const updateSongProgress = useAppStore(state => state.updateSongProgress);
  const currentlyPlaying = useAppStore(state => state.currentlyPlaying);



  const handleOnLoadMetadata= (event: Event) =>{
    console.log("on load metadata");
    console.log(event);
    console.log(event.target?.duration);
    updateSongDuration(event.target?.duration);
  }

  const handleOnTimeUpdate = (event: Event) =>{
    console.log("on time update");
    console.log(event.target?.currentTime);
    updateSongProgress(event.target?.currentTime);
    audioPlayer.currentTime
  }


  const configEventListeners: EffectCallback = () => {
    audioPlayer.addEventListener('play', play);
    audioPlayer.addEventListener('pause', pause);
    audioPlayer.addEventListener('ended', nextSong);
    audioPlayer.addEventListener('loadedmetadata', handleOnLoadMetadata);
    audioPlayer.addEventListener('timeupdate', handleOnTimeUpdate);

    return () => {
      audioPlayer.removeEventListener('play', play);
      audioPlayer.removeEventListener('pause', pause);
      audioPlayer.removeEventListener('ended', nextSong);
      audioPlayer.removeEventListener('loadedmetadata', handleOnLoadMetadata);
      audioPlayer.removeEventListener('timeupdate', handleOnTimeUpdate);
    }
  }

  const handleSongChange: EffectCallback = () => {

    if (!currentlyPlaying) {
      return
    }

    const queryString: string =  currentlyPlaying.url.split('?')[1];

    const searchParams = new URLSearchParams(queryString);
    const streamId = searchParams.get("v");

    if(!streamId){
      return
    }

    audioPlayer.pause();

    const fetchSongItemData = async () => {
      let response = await service.getStream(streamId);

      let sortAudioStream = response.data.audioStreams.sort((a, b) => (b.bitrate - a.bitrate));

      let audioStream = sortAudioStream[0];

      console.log({audioStream});

      if (!audioStream) {
        return
      }
      audioPlayer.setAttribute("src", audioStream?.url);
      audioPlayer.play();
    }

    fetchSongItemData();
  }





  useEffect(configEventListeners, []);
  useEffect(handleSongChange, [currentlyPlaying]);

}