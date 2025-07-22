import { Button } from '../../Button'
import {
  IconDislike,
  IconLike,
  IconMenuKebabHorizontal,
  IconShare,
} from '../../../icons'
import { Menu } from '../../Menu'
import styles from './currentVideoInfo.module.css'

export const CurrentVideoInfo = () => (
  <div className={styles['current-video']}>
    <div className={styles['current-video__views']}>123k views</div>
    <Menu menuClassName={styles['current-video__menu']}>
      <Menu.Item>
        <Button className={styles['current-video__button']}>
          <IconLike />
          <span>123k</span>
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button className={styles['current-video__button']}>
          <IconDislike />
          <span>435k</span>
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button className={styles['current-video__button']}>
          <IconShare />
          <span>Share</span>
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button>
          <IconMenuKebabHorizontal />
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)
