import { PlayStatus } from "../../types";
import { AudioStream, StreamResponse } from "../../types/service";

export interface PlayerState {
  currentlyPlaying: StreamResponse | null,
  currentlyPlayingAudioStream: AudioStream | null,
  playStatus: PlayStatus,
  play: ()=> void,
  pause: ()=> void,
}