import { VideoPlayerControls } from './VideoPlayerControls'
import Poster from './image.png'
import styles from './videoPlayer.module.css'

export const VideoPlayer = () => {
  return (
    <figure id="videoContainer" data-fullscreen="false">
      <video
        id="video"
        className={styles['video-player']}
        poster={Poster}
      ></video>
      <VideoPlayerControls />
      <figcaption className={styles['video-player__figcaption']}>
        Dude You Re Getting A Telescope
      </figcaption>
    </figure>
  )
}
