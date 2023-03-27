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
import { StateCreator } from 'zustand';
import { PlayerState } from './types';
import { AppState } from '../types'
import { SongItem } from '../../types/service';

export const createPlayerSlice: StateCreator<
  AppState,
  [],
  [],
  PlayerState
> = (set, get) => ({
  queue: [],
  currentlyPlaying: null,
  currentlyPlayingIndex: null,
  playStatus: 'paused',
  play: () => { set({ playStatus: 'playing' }) },
  pause: () => { set({ playStatus: 'paused' }) },
  nextSong: () => {
    const { queue, currentlyPlayingIndex } = get();

    if(currentlyPlayingIndex === null){
      return
    }

    let nextSongIndex = currentlyPlayingIndex + 1;

    let nextSong = queue[nextSongIndex]

    if (!nextSong){
      return
    }

    set({currentlyPlaying: nextSong, currentlyPlayingIndex: nextSongIndex});
  },
  prevSong:()=>{
    const { queue, currentlyPlayingIndex } = get();

    if(currentlyPlayingIndex === null){
      return
    }

    let prevSongIndex = currentlyPlayingIndex - 1;

    if(prevSongIndex < 0){
      return
    }

    let prevSong = queue[prevSongIndex];

    if (!prevSong){
      return
    }

    set({currentlyPlaying: prevSong, currentlyPlayingIndex: prevSongIndex});
  },
  addToQueue: (songItem: SongItem) => {
    let updatedState: Partial<AppState> = {};
    const { queue, currentlyPlaying } = get();

    if (!currentlyPlaying) {
      updatedState.currentlyPlaying = songItem;
      updatedState.currentlyPlayingIndex = 0;
    }

    const updatedQueue = [...queue, songItem];
    updatedState.queue = updatedQueue;

    set(updatedState);
  }
})