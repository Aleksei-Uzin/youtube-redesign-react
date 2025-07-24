import { Menu } from '../../Menu'
import {
  IconPause,
  IconNext,
  IconVolume,
  IconSubtitles,
  IconVideoPlayerGear,
  IconSize,
  IconFullScreen,
} from '../../../icons'
import { RangeController } from '../../RangeController'
import styles from './playerControlsDesktop.module.css'

export const PlayerControlsDesktop = () => {
  return (
    <div className={styles['player-controls-desktop']}>
      <div className={styles['player-controls-desktop__duration']}>
        <span>1:34</span>
        <span>19:00</span>
      </div>
      <RangeController />
      <div className={styles['player-controls-desktop__settings']}>
        <Menu menuClassName={styles['player-controls-desktop__left']}>
          <Menu.Item>
            <IconPause />
          </Menu.Item>
          <Menu.Item>
            <IconNext />
          </Menu.Item>
          <Menu.Item itemClassName={styles['player-controls-desktop__volume']}>
            <IconVolume />
            <RangeController />
          </Menu.Item>
        </Menu>
        <Menu menuClassName={styles['player-controls-desktop__right']}>
          <Menu.Item>
            <IconSubtitles />
          </Menu.Item>
          <Menu.Item>
            <IconVideoPlayerGear />
          </Menu.Item>
          <Menu.Item>
            <IconSize />
          </Menu.Item>
          <Menu.Item>
            <IconFullScreen />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}
