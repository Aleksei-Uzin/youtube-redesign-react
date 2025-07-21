import { createElement, useEffect, useState } from 'react'
import { Menu } from '../../Menu'
import { Button } from '../../Button'
import { CONTENT } from './content'
import { useMedia } from '../../../hooks/useMedia'
import Avatar from './assets/profile-photo.png'
import styles from './profileSection.module.css'

export const ProfileSection = () => {
  const [visibility, setVisibility] = useState(() =>
    CONTENT.map(({ visible }) => visible)
  )
  const isMatchMedia = useMedia('(max-width: 660px)')

  useEffect(() => {
    if (isMatchMedia) {
      setVisibility(prev => prev.map(val => !val))
    }
  }, [isMatchMedia])

  const listItems = CONTENT.map(({ id, icon, notifications = [] }, ind) => {
    const len = notifications.length
    return (
      <Menu.Item
        className={styles['profile-item']}
        data-visible={visibility[ind]}
        key={id}
      >
        <Button className={styles['profile-item__button']}>
          {!icon ? (
            <img
              src={Avatar}
              alt="Profile photo"
              className={styles['profile-item__avatar']}
              width="40"
              height="40"
            />
          ) : (
            createElement(icon)
          )}
        </Button>
        {len ? (
          <span className={styles['profile-item__span']}>{len}</span>
        ) : null}
      </Menu.Item>
    )
  })

  return <Menu menuClassName={styles['profile-buttons']}>{listItems}</Menu>
}
