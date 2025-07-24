import { PlayerControlsDesktop } from '../PlayerControlsDesktop'
import { PlayerControlsMobile } from '../PlayerControlsMobile'
import { useMedia } from '../../../hooks'

export const VideoPlayerControls = () => {
  const isMatchMedia = useMedia('(max-width: 660px)')

  return isMatchMedia ? <PlayerControlsMobile /> : <PlayerControlsDesktop />
}
