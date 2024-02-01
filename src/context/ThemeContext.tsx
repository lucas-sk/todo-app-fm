import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (localStorage.theme === 'dark') {
      return 'dark';
    } else if (localStorage.theme === 'light') {
      return 'light';
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  })

  function toggleTheme() {
    if (theme === 'light') {
      localStorage.theme = 'dark';
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)