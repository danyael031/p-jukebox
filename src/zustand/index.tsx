import { create } from 'zustand'
import { createPlayerSlice } from './MediaPlayerSlice'
import { PlayerState } from './types'


const useBearStore = create<PlayerState>()((...a) => ({
  ...createPlayerSlice(...a),
}))


export {
  useBearStore
}