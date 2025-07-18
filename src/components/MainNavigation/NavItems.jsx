import { createElement } from 'react'
import classNames from 'classnames'
import { Button } from '../Button'
import { Menu } from '../Menu'
import { SubscriptionsMenu } from './SubscriptionsMenu'
import { NAV_ITEMS } from './content'
import styles from './mainNavigation.module.css'

export const NavItems = () => {
  const len = NAV_ITEMS.length
  const items = []

  for (let i = 0; i < len; i++) {
    let { id, icon, title } = NAV_ITEMS[i]
    const isLastItem = items.length === len - 1
    let element = null

    if (isLastItem) {
      element = <SubscriptionsMenu />
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

    const finalClassNames = classNames(styles['main-navigation-box__item'], {
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
