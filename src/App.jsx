import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'

import HeroComp from './components/HeroComp'
import WhyJoin from './components/WhyJoin'
import CtaComp1 from './components/CtaComp1'
import WhatsInside from './components/WhatsInside'

export default function App() {
  return (
    <Box width='100%'>
      <CssBaseline />
      <HeroComp />
      <WhyJoin />
      <CtaComp1 />
      <WhatsInside />
    </Box>
  )
}
