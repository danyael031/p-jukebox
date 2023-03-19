import { create } from 'zustand'
import { createPlayerSlice } from './MediaPlayerSlice'
import { AppState } from './types'


const useAppStore = create<AppState>()((...a) => ({
  ...createPlayerSlice(...a),
}))


export {
  useAppStore
}