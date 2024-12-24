import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './Home.jsx'
import Terms from './Terms.jsx'
import Privacy from './Privacy.jsx'
import Redirect from './Redirect.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='*' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}
