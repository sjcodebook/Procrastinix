import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'

import HeroComp from './components/HeroComp'
import WhyJoin from './components/WhyJoin'

export default function App() {
  return (
    <Box width='100%'>
      <CssBaseline />
      <HeroComp />
      <WhyJoin />
    </Box>
  )
}
