
export interface BearState {
  bears: number
  increase: (by: number) => void
}

export type PlayStatus = 'playing' | 'paused' | 'disabled';

export interface PlayerState {
  playStatus: PlayStatus,
  updatePlayStatus: (status: PlayStatus) => void,
}

export interface AppState extends PlayerState {}


