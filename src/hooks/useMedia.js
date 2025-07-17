import { useDebugValue, useEffect, useState } from 'react'

const formatCountDebugValue = ({ query, state }) => `${query} => ${state}`

export function useMedia(query, initialState = false) {
  const [state, setState] = useState(initialState)

  useDebugValue({ query, state }, formatCountDebugValue)

  useEffect(() => {
    const mql = window.matchMedia(query)

    mql.onchange = e => {
      setState(e.matches)
    }
  }, [query])

  return state
}
