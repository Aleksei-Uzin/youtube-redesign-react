import { useEffect, useState } from 'react'
import { Button } from '../Button'
import { IconMenu } from '../../icons'
import { useHeaderMenuButton } from './useHeaderMenuButton'
import { useMedia } from '../../hooks/useMedia'
import styles from './headerMenuButton.module.css'

export const HeaderMenuButton = () => {
  const [, setButtonState] = useHeaderMenuButton()
  const isMatchMedia = useMedia('(max-width: 660px)')
  const [media, setMedia] = useState(isMatchMedia)

  useEffect(() => void setMedia(isMatchMedia), [isMatchMedia])

  const handleClick = () => setButtonState(prev => !prev)

  return (
    <Button
      className={styles[media ? 'header-menu-button_none' : '']}
      onClick={handleClick}
    >
      <IconMenu />
    </Button>
  )
}
