import { Box, Stack, Typography } from '@mui/material'

import SubscribeForm from './common/SubscribeForm'

import Mascot from '../assets/procrastinix-mascot.png'
import GreenHighlight from '../assets/green-highlight.svg'

export default function HeroComp() {
  return (
    <Box bgcolor='#ffffff' width='100%' py={8}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={10}>
        <img src={Mascot} width={500} />
        <Stack justifyContent='center' alignItems='space-between' gap={2}>
          <Box position='relative'>
            <img
              src={GreenHighlight}
              width={600}
              style={{
                position: 'absolute',
                top: '128px',
                left: '-12px',
                zIndex: 0,
              }}
            />
            <Typography
              position='relative'
              component='h1'
              fontSize='60px'
              fontWeight={700}
              lineHeight='60px'>
              Transform Your Productivity with Insights from the World’s Top Self-Help Books!
            </Typography>
          </Box>
          <Typography
            component='h2'
            fontSize='20px'
            fontWeight={700}
            lineHeight='28px'
            fontStyle='italic'>
            Join{' '}
            <span
              style={{
                textDecoration: 'underline',
              }}>
              Hoot & Hustle by ProcrastiNix
            </span>{' '}
            for exclusive, twice-weekly emails packed with wisdom, time management tips, and
            inspiration from bestsellers like Atomic Habits and Deep Work. Say goodbye to
            procrastination and hello to success—free to your inbox.
          </Typography>
          <SubscribeForm />
        </Stack>
      </Stack>
    </Box>
  )
}
