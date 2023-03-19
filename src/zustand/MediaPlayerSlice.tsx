import { StateCreator } from 'zustand';
import { AppState, PlayerState, PlayStatus } from './types';

export const createPlayerSlice: StateCreator<
  AppState,
  [],
  [],
  PlayerState
> = (set) => ({
    playStatus: 'disabled',
    updatePlayStatus: (status: PlayStatus)=>{ set({playStatus: status}) }
  })