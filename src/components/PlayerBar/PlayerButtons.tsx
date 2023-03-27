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
import { Icon, IconProps } from "../Icon/Icon";
import styles from './styles.module.css';

const iconStyle = "round";

export function SkipPreviousButton(props: IconProps) {
  return (
    <Icon
      {...props}
      iconStyle="round"
      iconColor="red"
      iconName="skip_previous"
      className={styles.playerButton}
    />
  )
}

export function PlayPauseButton({ isPlaying = false, ...props }: IconProps & { isPlaying?: boolean }) {

  const playControl = isPlaying ? "pause" : "play_arrow";

  return (
    <Icon
      {...props}
      iconName={playControl}
      iconStyle="round"
      iconColor="red"
      className={styles.playerButton}
    />
  )
}

export function SkipNextButton(props: IconProps) {

  return (
    <Icon
      {...props}
      iconName="skip_next"
      iconStyle="round"
      iconColor="red"
      className={styles.playerButton}
    />)
}