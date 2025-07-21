import classNames from 'classnames'
import { Menu } from '../Menu'
import { NavItems } from './NavItems'
import { useHeaderMenuButton } from '../HeaderMenuButton'
import styles from './mainNavigation.module.css'

export const MainNavigation = () => {
  const [state] = useHeaderMenuButton()
  const finalClassNames = classNames({
    [styles['main-navigation-box_hidden']]: state,
  })

  return (
    <nav>
      <Menu boxClassName={finalClassNames}>
        <NavItems />
      </Menu>
    </nav>
  )
}
