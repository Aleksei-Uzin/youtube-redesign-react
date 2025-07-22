import { VideoPlayer } from '../VideoPlayer'
import { CurrentVideoInfo } from './CurrentVideoInfo'
import { CurrentVideoDescription } from './CurrentVideoDescription'
import styles from './mainContent.module.css'

export const MainContent = () => {
  return (
    <main className={styles['main-content-box']}>
      <VideoPlayer />
      <CurrentVideoInfo />
      <CurrentVideoDescription />
    </main>
  )
}
