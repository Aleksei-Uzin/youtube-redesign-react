import { Button } from '../../Button'
import { Menu } from '../../Menu'
import { SUBSCRIPTIONS } from './content'
import styles from './subscriptionsMenu.module.css'

export const SubscriptionsMenu = ({ buttonClassName, itemClassName }) => {
  const items = SUBSCRIPTIONS.map(({ id, icon, name }) => (
    <Menu.Item key={id} itemClassName={itemClassName}>
      <Button className={buttonClassName}>
        <img src={icon} alt={name} width="26" height="26" />
        <span className={styles['main-navigation-box__name']}>{name}</span>
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
