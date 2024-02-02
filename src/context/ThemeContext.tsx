import { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  function toggleTheme() {
    if (theme === 'light') {
      localStorage.theme = 'dark';
      setTheme(() => 'dark');
    } else {
      localStorage.theme = 'light';
      setTheme(() => 'light');
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)