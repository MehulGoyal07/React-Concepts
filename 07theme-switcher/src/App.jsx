import React, { useEffect, useState } from 'react';
import Card from './components/Card.jsx';
import ThemeBtn from './components/ThemeBtn.jsx';
import { ThemeProvider } from './contexts/theme.js';


function App() {

  const [themeMode, setThemeMode] = useState("light");

  // We will define the functionality here and automatically that will be defined in the theme.js file
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    let ele = document.querySelector("html")?.classList
    ele?.remove("light", "dark")
    ele?.add(themeMode)
  }, [themeMode])


  return (

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
