import { Button } from '../Button'
import { IconYouTubeLogo } from '../../icons'
import { HeaderMenuButton } from '../HeaderMenuButton'
import { ProfileSection } from './ProfileSection'
import { SearchForm } from './SearchForm'
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__youtube-buttons']}>
        <div className={styles['header__nav-box']}>
          <HeaderMenuButton />
          <Button as="link">
            <IconYouTubeLogo />
          </Button>
        </div>
        <SearchForm />
      </div>
      <ProfileSection />
    </header>
  )
}
