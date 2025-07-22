import { useState } from 'react'
import classNames from 'classnames'
import styles from './animateButton.module.css'

export const AnimateButton = ({ label }) => {
  const [on, setOn] = useState(true)
  const buttonId = `${label.toLowerCase()}-animate-button`

  const finalClassNames = classNames(styles['animate-button__checkbox'], {
    [styles['animate-button__checkbox_on']]: on,
    [styles['animate-button__checkbox_off']]: !on,
  })

  const handleChange = e => setOn(e.target.checked)

  return (
    <div className={styles['animate-button-box']}>
      <label className={styles['animate-button__label']} htmlFor={buttonId}>
        {label}
      </label>
      <input
        checked={on}
        className={finalClassNames}
        name={buttonId}
        id={buttonId}
        onChange={handleChange}
        type="checkbox"
      />
    </div>
  )
}
