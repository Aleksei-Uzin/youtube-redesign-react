import { createElement } from 'react'
import { Menu } from '../../Menu'
import { Button } from '../../Button'
import { CONTENT } from './content'
import { useMedia } from '../../../hooks'
import Avatar from './assets/profile-photo.png'
import styles from './profileSection.module.css'

export const ProfileSection = () => {
  const isMatchMedia = useMedia('(max-width: 660px)')
  const visibility = CONTENT.map(({ visible }) =>
    isMatchMedia ? !visible : visible
  )

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
