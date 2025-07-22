import { createElement } from 'react'
import classNames from 'classnames'
import { Button } from '../../Button'
import { Menu } from '../../Menu'
import { SubscriptionsMenu } from '../SubscriptionsMenu'
import { useMedia } from '../../../hooks'
import { NAV_ITEMS } from './content'
import styles from './mainNavigationItems.module.css'

export const MainNavigationItems = () => {
  const isMatchMedia = useMedia('(max-width: 660px)')
  const len = NAV_ITEMS.length
  const items = []

  for (let i = 0; i < len; i++) {
    let { id, icon, title } = NAV_ITEMS[i]
    const isLastItem = items.length === len - 1
    let element = null

    if (isLastItem && !isMatchMedia) {
      element = (
        <SubscriptionsMenu
          buttonClassName={styles['main-navigation-box__btn']}
          itemClassName={styles['main-navigation-box__item']}
        />
      )
      id = 'nested-elements'
      i--
    } else {
      element = (
        <Button className={styles['main-navigation-box__btn']}>
          {createElement(icon)}
          <span>{title}</span>
        </Button>
      )
    }

    const finalClassNames = classNames({
      [styles['main-navigation-box__item']]: i + 1 !== len,
      [styles['main-navigation-box__item_large-pb']]: i === 2,
    })

    items.push(
      <Menu.Item key={id} itemClassName={finalClassNames}>
        {element}
      </Menu.Item>
    )
  }

  return items
}
