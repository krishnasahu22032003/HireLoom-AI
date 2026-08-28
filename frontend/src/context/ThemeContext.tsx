import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextType = {

  ToggleDarkMode: () => void,
  darkMode: boolean

};


const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {

  const context =  useContext(ThemeContext);

  if(!context){
    throw new Error("Context does  not exists");
  } ;

  return context ; 

};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

  const [darkMode, setDarkMode] = useState(false);

  const ToggleDarkMode = () => {

    setDarkMode((prev)=> !prev);

  };

  useEffect(() => {

    document.documentElement.classList.toggle("dark", darkMode);

  }, [darkMode]);

  return (

    <ThemeContext.Provider value={{ ToggleDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>

  )

}; 