import { Button } from '../Button'
import { IconMenu } from '../../icons'
import { useHeaderMenuButton } from './useHeaderMenuButton'
import { useMedia } from '../../hooks'
import styles from './headerMenuButton.module.css'

export const HeaderMenuButton = () => {
  const [, setButtonState] = useHeaderMenuButton()
  const isMatchMedia = useMedia('(max-width: 660px)')

  const handleClick = () => setButtonState(prev => !prev)

  return (
    <Button
      className={styles[isMatchMedia ? 'header-menu-button_none' : '']}
      onClick={handleClick}
    >
      <IconMenu />
    </Button>
  )
}
