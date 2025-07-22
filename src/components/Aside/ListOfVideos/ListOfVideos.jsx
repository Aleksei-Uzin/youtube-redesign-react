import { Menu } from '../../Menu'
import { CONTENT } from './content'
import styles from './listOfVideos.module.css'

export const ListOfVideos = () => {
  const listItems = CONTENT.map(
    ({ duration, id, owner, title, url, views }) => (
      <Menu.Item className={styles['recommended-video-item']} key={id}>
        <article>
          <figure className={styles['recommended-video-item__figure']}>
            <img src={url} alt={title} width="367" height="213" />
            <figcaption
              className={styles['recommended-video-item__figcaption']}
            >
              {title}
              <time
                className={styles['recommended-video-item__duration']}
                dateTime="P4M15S"
              >
                {duration}
              </time>
            </figcaption>
          </figure>
          <footer className={styles['recommended-video-item__footer']}>
            <span>{views}</span>
            <span>{owner}</span>
          </footer>
        </article>
      </Menu.Item>
    )
  )

  return <Menu>{listItems}</Menu>
}
