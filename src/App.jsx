import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'

import HeroComp from './components/HeroComp'
import WhyJoin from './components/WhyJoin'
import CtaComp1 from './components/CtaComp1'
import WhatsInside from './components/WhatsInside'
import MeetNix from './components/MeetNix'
import CtaComp2 from './components/CtaComp2'
import Testimonials from './components/Testimonials'
import FaqComp from './components/FaqComp'
import CtaComp3 from './components/CtaComp3'
import Footer from './components/Footer'

export default function App() {
  return (
    <Box width='100%'>
      <CssBaseline />
      <HeroComp />
      <WhyJoin />
      <CtaComp1 />
      <WhatsInside />
      <MeetNix />
      <CtaComp2 />
      <Testimonials />
      <FaqComp />
      <CtaComp3 />
      <Footer />
    </Box>
  )
}
