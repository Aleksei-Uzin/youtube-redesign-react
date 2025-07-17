import { useState } from 'react'
import { IconSearch } from '../../../icons'
import { Button } from '../../Button'
import styles from './searchForm.module.css'

export const SearchForm = () => {
  const [query, setQuery] = useState('')

  const handleChange = event => {
    setQuery(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Query string:', query)
  }

  return (
    <form className={styles['search-form']} onSubmit={handleSubmit}>
      <input
        type="search"
        id="search-input"
        name="search-input"
        className={styles['search-form__input']}
        placeholder="Search"
        onChange={handleChange}
      />
      <Button className={styles['search-form__button']} type="submit">
        <IconSearch />
      </Button>
    </form>
  )
}
