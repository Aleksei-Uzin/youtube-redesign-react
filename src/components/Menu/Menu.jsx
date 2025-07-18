import './menu.module.css'

export const Menu = ({
  children,
  boxClassName,
  header,
  headerClassName,
  menuClassName,
  ...rest
}) => {
  return (
    <div className={boxClassName}>
      {header ? <h2 className={headerClassName}>{header}</h2> : null}
      <ul className={menuClassName} {...rest}>
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
