import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './theme'
import ThemeBtn from './ThemeBtn'
import Card from './Card'

function Setup() {
    const [themeMode, setThemeMode] = useState('light')
    
    const lightTheme = () => {
        setThemeMode('light')
    }
    const darkTheme = () => {
        setThemeMode('dark')
    }

    useEffect(() => {
        document.querySelector('html')?.classList.remove('light', 'dark')
        document.querySelector('html')?.classList.add(themeMode)
    },[themeMode])
    
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
              <ThemeBtn />
              <Card/>
      </ThemeProvider>
    </>
  );
}

export default Setup