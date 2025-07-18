import { useEffect } from 'react'
import { Menu } from '../Menu'
import { NavItems } from './NavItems'
import { useHeaderMenuButton } from '../HeaderMenuButton'
import styles from './mainNavigation.module.css'

export const MainNavigation = () => {
  const [state] = useHeaderMenuButton()

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <Menu boxClassName={styles['main-navigation-box']}>
      <NavItems />
    </Menu>
  )
}
