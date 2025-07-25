import { Aside } from '../Aside'
import { MainNavigation } from '../MainNavigation'
import { MainContent } from '../MainContent'
import styles from './contentBox.module.css'

export const ContentBox = () => {
  return (
    <div className={styles['content-box']}>
      <MainNavigation />
      <div className={styles['content-box__content']}>
        <MainContent />
        <Aside />
      </div>
    </div>
  )
}
