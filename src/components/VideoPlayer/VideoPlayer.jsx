import { VideoPlayerControls } from './VideoPlayerControls'
import { Button } from '../Button'
import { IconArrowDown } from '../../icons'
import { useMedia } from '../../hooks'
import Poster from './image.png'
import styles from './videoPlayer.module.css'

export const VideoPlayer = () => {
  const isMatchMedia = useMedia('(max-width: 992px)')

  return (
    <figure id="video-container" data-fullscreen="false">
      <div className={styles['video-player__box']}>
        <video
          id="video"
          className={styles['video-player']}
          poster={Poster}
        ></video>
        <VideoPlayerControls />
      </div>
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
