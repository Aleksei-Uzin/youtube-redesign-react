import classNames from 'classnames'
import { MainNavigationItems } from './MainNavigationItems'
import { Menu } from '../Menu'
import { useHeaderMenuButton } from '../HeaderMenuButton'
import styles from './mainNavigation.module.css'

export const MainNavigation = () => {
  const [state] = useHeaderMenuButton()
  const boxClassName = classNames(styles['main-navigation-box'], {
    [styles['main-navigation-box_hidden']]: state,
  })

  return (
    <nav>
      <Menu
        boxClassName={boxClassName}
        menuClassName={styles['main-navigation-menu']}
      >
        <MainNavigationItems />
      </Menu>
    </nav>
  )
}
