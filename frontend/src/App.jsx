import { useState, useEffect, createContext } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { initializeGA, trackPageView } from './utils/analytics.js'

import Home from './Home.jsx'
import Terms from './Terms.jsx'
import Privacy from './Privacy.jsx'
import Redirect from './Redirect.jsx'

export const AppContext = createContext(undefined)

function App() {
  const [appState, setAppState] = useState({
    hasSubscribed: false,
  })

  useEffect(() => {
    initializeGA()
  }, [])

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <BrowserRouter>
        <PageViewTracker />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='*' element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

const PageViewTracker = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location])

  return null
}

export default App
