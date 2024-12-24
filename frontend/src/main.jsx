import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import CookieConsent from 'react-cookie-consent'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <App />
    <Toaster />
    <CookieConsent
      buttonText='Ok'
      style={{ background: '#2B373B' }}
      acceptOnScroll
      acceptOnScrollPercentage={15}>
      ProcratiNix uses cookies to enhance your experience. By continuing to visit this site you
      agree to our use of cookies.
    </CookieConsent>
  </StrictMode>
)
