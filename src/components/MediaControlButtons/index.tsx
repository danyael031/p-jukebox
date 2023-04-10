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
import React from "react";
import { audioPlayer } from "../../audioPlayer";
import { useAppStore } from "../../zustand";
import styles from './styles.module.css';
import { SkipPreviousButton, PlayPauseButton, SkipNextButton } from "./PlayerButtons";

export function MediaControlButtons() {
  const playStatus = useAppStore(store => store.playStatus);
  const currentlyPlaying = useAppStore(store => store.currentlyPlaying);
  const nextSong = useAppStore(store => store.nextSong);
  const prevSong = useAppStore(store => store.prevSong);

  const isDisabled = !currentlyPlaying;

  function playPauseControl() {

    if (isDisabled) {
      return
    }

    if (playStatus === 'paused') {
      audioPlayer.play();
      return
    }

    if (playStatus === "playing") {
      audioPlayer.pause();
      return
    }
  }

  return (
    <div className={styles.mediaControlButtonsContainer}>
      <SkipPreviousButton
        onClick={() => { prevSong(); }}
      />
      <PlayPauseButton
        isPlaying={playStatus === 'playing'}
        onClick={playPauseControl}
        isDisabled={isDisabled}
      />
      <SkipNextButton
        onClick={() => { nextSong(); }}
      />

    </div>
  )
}