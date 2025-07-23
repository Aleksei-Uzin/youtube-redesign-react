import { VideoPlayerControls } from './VideoPlayerControls'
import { Button } from '../Button'
import { IconArrowDown } from '../../icons'
import { useMedia } from '../../hooks'
import Poster from './image.png'
import styles from './videoPlayer.module.css'

export const VideoPlayer = () => {
  const isMatchMedia = useMedia('(max-width: 992px)')

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
        {isMatchMedia ? (
          <Button>
            <IconArrowDown />
          </Button>
        ) : null}
      </figcaption>
    </figure>
  )
}
