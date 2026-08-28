import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextType = {

  ToggleDarkMode: () => void,
  darkMode: boolean

};


const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {

  return useContext(ThemeContext);

};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

  const [darkMode, setDarkMode] = useState(false);

  const ToggleDarkMode = () => {

    setDarkMode(!darkMode);

  };

  useEffect(() => {

    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");

  }, [darkMode]);

  return (

    <ThemeContext.Provider value={{ ToggleDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>

  )

}; 