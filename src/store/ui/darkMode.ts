import { create } from 'zustand'

interface State {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const useDarkModeStore = create<State>((set) => ({
  isDarkMode:
    JSON.parse(localStorage.getItem('mode') as string) || window.matchMedia('(prefers-color-scheme: dark)').matches,
  toggleDarkMode: () => {
    set(({ isDarkMode }) => {
      localStorage.setItem('mode', JSON.stringify(!isDarkMode))
      return { isDarkMode: !isDarkMode }
    })
  },
}))
