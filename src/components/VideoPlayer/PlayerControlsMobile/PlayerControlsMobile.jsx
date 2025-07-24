import { Menu } from '../../Menu'
import { IconPause, IconVolume } from '../../../icons'
import { RangeController } from '../../RangeController'
import styles from './PlayerControlsMobile.module.css'

export const PlayerControlsMobile = () => {
  return (
    <div className={styles['player-controls-mobile']}>
      <Menu menuClassName={styles['player-controls-mobile__list']}>
        <Menu.Item itemClassName={styles['player-controls-mobile__item']}>
          <IconPause />
        </Menu.Item>
        <Menu.Item itemClassName={styles['player-controls-mobile__range']}>
          <span>1:34</span>
          <RangeController />
          <span>-10:00</span>
        </Menu.Item>
        <Menu.Item itemClassName={styles['player-controls-mobile__item']}>
          <IconVolume />
        </Menu.Item>
      </Menu>
    </div>
  )
}
