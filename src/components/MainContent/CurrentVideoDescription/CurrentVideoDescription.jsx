import classNames from 'classnames'
import { Button } from '../../Button'
import { useMedia } from '../../../hooks'
import Logo from './FoodDrinkChannelLogo.png'
import { DESCRIPTION, SUBSCRIBERS_NUMB } from './content'
import styles from './currentVideoDescription.module.css'

export const CurrentVideoDescription = () => {
  const isMatchMedia = useMedia('(max-width: 660px)')
  const finalButtonClassNames = classNames(styles['subscribe-button'], {
    [styles['subscribe-button_primary']]: !isMatchMedia,
    [styles['subscribe-button_secondary']]: isMatchMedia,
  })

  return (
    <section className={styles['current-video-description']}>
      <article className={styles['current-video-description__article']}>
        <img
          src={Logo}
          alt="Food and Drink Channel Logo"
          width="80"
          height="80"
        />
        <div>
          <header className={styles['current-video-description__header-box']}>
            <h1 className={styles['current-video-description__title']}>
              Food & Drink
            </h1>
            {isMatchMedia ? (
              <span
                className={styles['current-video-description__subscribers']}
              >
                {SUBSCRIBERS_NUMB.toUpperCase()} subscribed
              </span>
            ) : (
              <time
                className={styles['current-video-description__date']}
                dateTime="P4M15S"
              >
                Published on 14 Jun 2019
              </time>
            )}
          </header>
          <p className={styles['current-video-description__text']}>
            {DESCRIPTION}
          </p>
          <Button className={styles['current-video-description__button']}>
            Show more
          </Button>
        </div>
      </article>
      <Button className={finalButtonClassNames}>
        Subscribe {!isMatchMedia ? SUBSCRIBERS_NUMB : null}
      </Button>
    </section>
  )
}
