import { Box, Stack, Typography } from '@mui/material'

import SubscribeForm from './common/SubscribeForm'
import { useViewport } from '../hooks/useViewport'

import Mascot from '../assets/procrastinix-mascot.png'
import GreenHighlight from '../assets/green-highlight.svg'

export default function HeroComp() {
  const device = useViewport()

  return (
    <Box bgcolor='#ffffff' width='100%' py={{ xs: 6, lg: 8 }}>
      <Stack
        px={{ xs: 2, sm: 8, md: 24, lg: 0 }}
        direction={{ xs: 'column-reverse', lg: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={{ xs: 8, lg: 10 }}>
        <img src={Mascot} width={device === 'desktop' ? 500 : 350} />
        <Stack
          position='relative'
          justifyContent='center'
          alignItems={{ xs: 'center', lg: 'flex-start' }}
          gap={2}>
          <Box position='relative'>
            <img
              src={GreenHighlight}
              width={device === 'desktop' ? 600 : 350}
              style={{
                position: 'absolute',
                top: device === 'desktop' ? '45%' : device === 'tablet' ? '25%' : '45%',
                left: device === 'desktop' ? '-2.1%' : '50%',
                transform: device === 'desktop' ? 'none' : 'translateX(-50%)',
                zIndex: 0,
              }}
            />
            <Typography
              position='relative'
              component='h1'
              fontSize={{ xs: '42px', lg: '60px' }}
              fontWeight={700}
              lineHeight={{ xs: '42px', lg: '60px' }}
              textAlign={{ xs: 'center', lg: 'left' }}>
              Transform Your Productivity with Insights from the World’s Top Self-Help Books!
            </Typography>
          </Box>
          <Typography
            px={1}
            component='h2'
            fontSize={{ xs: '18px', lg: '20px' }}
            fontWeight={700}
            lineHeight={{ xs: '26px', lg: '28px' }}
            fontStyle='italic'
            textAlign={{ xs: 'center', lg: 'left' }}
            sx={{ zIndex: 1 }}>
            Join{' '}
            <span
              style={{
                textDecoration: 'underline',
              }}>
              Hoot & Hustle by ProcrastiNix
            </span>{' '}
            for exclusive, thrice-weekly emails packed with wisdom, time management tips, and
            inspiration from bestsellers like Atomic Habits, Deep Work, Eat That Frog and many more.
            Say goodbye to procrastination and hello to success—100% free to your inbox.
          </Typography>
          <SubscribeForm trackingLabel='ctaHero' />
        </Stack>
      </Stack>
    </Box>
  )
}
