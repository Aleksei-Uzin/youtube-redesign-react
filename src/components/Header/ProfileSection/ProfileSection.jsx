import { createElement, useEffect, useState } from 'react'
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
      <li
        key={id}
        className={styles['profile-item']}
        data-visible={visibility[ind]}
      >
        <Button>
          {typeof icon === 'string' ? (
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
      </li>
    )
  })

  return <ul className={styles['profile-buttons']}>{listItems}</ul>
}
