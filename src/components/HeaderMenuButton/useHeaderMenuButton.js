import { createContext, useContext } from 'react'

export const HeaderMenuButtonContext = createContext()

export function useHeaderMenuButton() {
  const context = useContext(HeaderMenuButtonContext)

  if (!context) {
    throw new Error(
      'useHeaderMenuButton must be used within the HeaderMenuButtonContext'
    )
  }

  return context
}
