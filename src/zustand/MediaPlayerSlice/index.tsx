import { StateCreator } from 'zustand';
import { PlayerState } from './types';
import { AppState } from '../types'

export const createPlayerSlice: StateCreator<
  AppState,
  [],
  [],
  PlayerState
> = (set) => ({
    currentlyPlaying: null,
    currentlyPlayingAudioStream: null,
    playStatus: 'paused',
    play: ()=>{ set({playStatus: 'playing'}) },
    pause: ()=>{ set({playStatus: 'paused'}) },
  })