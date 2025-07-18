import { Button } from '../Button'
import { Menu } from '../Menu'
import { SUBSCRIPTIONS } from './content'
import styles from './mainNavigation.module.css'

export const SubscriptionsMenu = () => {
  const items = SUBSCRIPTIONS.map(({ id, icon, title }) => (
    <Menu.Item key={id} itemClassName={styles['main-navigation-box__item']}>
      <Button className={styles['main-navigation-box__btn']}>
        <img src={icon} alt={title} width="26" height="26" />
        <span>{title}</span>
      </Button>
    </Menu.Item>
  ))

  return (
    <Menu
      boxClassName={styles['subscriptions-box']}
      header="Subscriptions"
      headerClassName={styles['subscriptions-header']}
    >
      {items}
    </Menu>
  )
}
