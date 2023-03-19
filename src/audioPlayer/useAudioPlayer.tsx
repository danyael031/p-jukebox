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