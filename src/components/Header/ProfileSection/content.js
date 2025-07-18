import {
  IconBell,
  IconCamera,
  IconCandyBox,
  IconMenuKebab,
} from '../../../icons'

export const CONTENT = [
  {
    id: 'video',
    icon: IconCamera,
    visible: true,
  },
  {
    id: 'menu',
    icon: IconCandyBox,
    visible: true,
  },
  {
    id: 'notifications',
    icon: IconBell,
    notifications: ['message 1', 'message 2', 'message 3'],
    visible: true,
  },
  {
    id: 'profile-avatar',
    icon: null,
    visible: true,
  },
  {
    id: 'mobile-menu',
    icon: IconMenuKebab,
    visible: false,
  },
]
