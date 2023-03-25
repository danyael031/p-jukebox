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
import { useEffect } from "react";
import { useAppStore } from "../zustand";

export function useSetAudioPlayerEvents(audioPlayer: HTMLAudioElement){
  const play = useAppStore(state => state.play);
  const pause = useAppStore(state => state.pause);

  useEffect(()=>{
    audioPlayer.addEventListener('play', play);
    audioPlayer.addEventListener('pause', pause);

    return ()=>{
      audioPlayer.removeEventListener('play', play);
      audioPlayer.removeEventListener('pause', pause);
    }
  },[]);



}