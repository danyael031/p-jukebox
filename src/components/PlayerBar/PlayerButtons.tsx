import { Icon, IconProps } from "../Icon/Icon";
import styles from './styles.module.css';

const iconStyle = "round";

export function SkipPreviousButton(props: IconProps) {
  return (
    <Icon
      {...props}
      isDisabled={true}
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