import { AnimateButton } from '../AnimateButton'
import { ListOfVideos } from './ListOfVideos'
import styles from './aside.module.css'

export const Aside = () => {
  return (
    <aside className={styles['asside-box']}>
      <header className={styles['aside-header']}>
        <h2 className={styles['aside-header__h2']}>Next</h2>
        <AnimateButton label="Autoplay" />
      </header>
      <ListOfVideos />
    </aside>
  )
}
