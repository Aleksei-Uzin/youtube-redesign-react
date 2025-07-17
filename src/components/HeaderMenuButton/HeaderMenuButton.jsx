import { useEffect, useState } from 'react'
import { Button } from '../Button'
import { IconMenu } from '../../icons'
import { useMedia } from '../../hooks/useMedia'
import styles from './headerMenuButton.module.css'

export const HeaderMenuButton = () => {
  const isMatchMedia = useMedia('(max-width: 660px)')
  const [state, setState] = useState(isMatchMedia)

  useEffect(() => void setState(isMatchMedia), [isMatchMedia])

  return (
    <Button className={styles[state ? 'header-menu-button_none' : '']}>
      <IconMenu />
    </Button>
  )
}
