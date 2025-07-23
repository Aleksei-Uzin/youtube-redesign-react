import classNames from 'classnames'
import styles from './menu.module.css'

export const Menu = ({
  children,
  boxClassName,
  header,
  headerClassName,
  menuClassName,
  ...rest
}) => {
  const finalMenuClassName = classNames(styles['menu-reset'], menuClassName)

  return (
    <div className={boxClassName}>
      {header ? <h2 className={headerClassName}>{header}</h2> : null}
      <ul className={finalMenuClassName} {...rest}>
        {children}
      </ul>
    </div>
  )
}

const MenuItem = ({ children, itemClassName, ...rest }) => (
  <li className={itemClassName} {...rest}>
    {children}
  </li>
)

Menu.Item = MenuItem
