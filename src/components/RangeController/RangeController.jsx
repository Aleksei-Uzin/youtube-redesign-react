import { useState } from 'react'
import styles from './rangeController.module.css'

export const RangeController = () => {
  const [range, setRange] = useState(30)

  const handleChange = e => {
    setRange(e.target.valueAsNumber)
  }

  return (
    <input
      className={styles['range-controller']}
      id="rangeController"
      name="rangeController"
      min="0"
      max="100"
      value={range}
      step="10"
      type="range"
      onChange={handleChange}
    />
  )
}
