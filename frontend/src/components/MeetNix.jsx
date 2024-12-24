import { Box, Stack, Typography } from '@mui/material'

import { useViewport } from '../hooks/useViewport'

import Owl from '../assets/owl-outline.svg'
import GreenHighlight from '../assets/green-highlight-2.svg'

export default function MeetNix() {
  const device = useViewport()

  return (
    <Box bgcolor='#f6d7ff' width='100%' pt={6} pb={6} px={{ xs: 2, lg: 0 }}>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent='center'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={{ xs: 5, lg: 10 }}>
        <Stack px={4} py={6} bgcolor='#fff' gap={2} borderRadius='20px'>
          <Box position='relative'>
            <img
              src={GreenHighlight}
              width={device === 'desktop' ? 350 : 280}
              style={{
                position: 'absolute',
                top: device === 'desktop' ? '46%' : device === 'tablet' ? '-2%' : '30%',
                left: device === 'desktop' ? '5%' : device === 'tablet' ? '60%' : '38%',
                transform:
                  device === 'desktop'
                    ? 'none'
                    : device === 'tablet'
                    ? 'translateX(-80%)'
                    : 'translateX(-50%)',
                zIndex: 0,
              }}
            />
            <Typography
              position='relative'
              component='h3'
              fontSize={{ xs: '40px', lg: '52px' }}
              fontWeight={700}
              lineHeight={{
                xs: '46px',
                lg: '60px',
              }}>
              Meet Nix and the Mission of ProcrastiNix
            </Typography>
          </Box>
          <Typography
            component='p'
            fontSize={{ xs: '22px', lg: '34px' }}
            fontWeight={300}
            lineHeight={{ xs: '28px', lg: '42px' }}>
            At ProcrastiNix, we’re committed to helping you defeat procrastination and unlock your
            potential. Guided by Nix the Owl, your wise companion, we share proven tips and engaging
            insights designed to transform how you approach productivity and self-growth.
          </Typography>
        </Stack>
        <img src={Owl} width={device === 'desktop' ? '500px' : '300px'} />
      </Stack>
    </Box>
  )
}
