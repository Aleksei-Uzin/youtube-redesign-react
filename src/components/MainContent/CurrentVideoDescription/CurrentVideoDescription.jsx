import { Button } from '../../Button'
import Logo from './FoodDrinkChannelLogo.png'
import styles from './currentVideoDescription.module.css'

export const CurrentVideoDescription = () => (
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
          <time
            className={styles['current-video-description__date']}
            dateTime="P4M15S"
          >
            Published on 14 Jun 2019
          </time>
        </header>
        <p className={styles['current-video-description__text']}>
          A successful marketing plan relies heavily on the pulling-power of
          advertising copy. Writing result-oriented ad copy is difficult, as it
          must appeal to, entice, and convince consumers to take action. There
          is no magic formula to write perfect ad copy; it is based on a number
          of factors, including ad placement, demographic, even the consumer’s
          mood when they see your ad.
        </p>
        <Button className={styles['current-video-description__button']}>
          Show more
        </Button>
      </div>
    </article>
    <Button className={styles['subscribe-button']}>Subscribe 2.3m</Button>
  </section>
)
