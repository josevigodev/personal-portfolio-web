import { useEffect, useState } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      return
    } else if (theme === 'light') {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme, element])

  return {setTheme, theme}

}