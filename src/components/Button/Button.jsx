import classNames from 'classnames'
import styles from './button.module.css'

export const Button = ({
  children,
  as = 'button',
  className = '',
  ...rest
}) => {
  const finalClassNames = classNames(styles['button-box'], className)

  if (as === 'link') {
    return (
      <a className={finalClassNames} href="#" {...rest}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={finalClassNames} type="button" {...rest}>
        {children}
      </button>
    )
  }
}
