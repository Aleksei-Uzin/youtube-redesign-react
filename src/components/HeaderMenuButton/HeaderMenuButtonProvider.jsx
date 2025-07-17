import { useState } from 'react'
import { HeaderMenuButtonContext } from './useHeaderMenuButton'

export function HeaderMenuButtonProvider({ children }) {
  const [state, setState] = useState(true)
  const value = [state, setState]

  return (
    <HeaderMenuButtonContext.Provider value={value}>
      {children}
    </HeaderMenuButtonContext.Provider>
  )
}
