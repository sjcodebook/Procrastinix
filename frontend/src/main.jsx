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
      style={{
        background: '#2B373B',
        fontSize: '12px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      buttonStyle={{
        color: '#4e503b',
        fontSize: '10px',
        background: '#f1d600',
        borderRadius: '5px',
        padding: '8px 15px',
        margin: '15px',
        border: 'none',
        cursor: 'pointer',
      }}
      contentStyle={{
        maxWidth: '72%',
      }}
      acceptOnScroll
      acceptOnScrollPercentage={5}>
      ProcratiNix uses cookies to enhance your experience. By continuing to visit this site you
      agree to our use of cookies.
    </CookieConsent>
  </StrictMode>
)
