import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import Footer from './components/ui/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
    <App />
    <Footer/>
    </ThemeContextProvider>
  </StrictMode>,
)
